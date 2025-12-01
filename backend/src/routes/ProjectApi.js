import express from "express";
import Project from "../models/ProjectsModel.js";
import upload from "../middlewares/uploads.js";
import { getCache, setCache, deleteCache } from "../utils/cache.js";

const router = express.Router();

// --------------------------------------
// ⭐ GET ALL PROJECTS (with In-memory Cache)
// --------------------------------------
router.get("/get", async (req, res) => {
  try {
    const cacheKey = "all_projects";

    // Return cached data
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      return res.json({
        fromCache: true,
        total: cachedData.length,
        data: cachedData,
      });
    }

    const projects = await Project.find().sort({ createdAt: -1 });

    // Save cache
    setCache(cacheKey, projects);

    res.json({
      fromCache: false,
      total: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error fetching projects",
      details: err.message,
    });
  }
});

// --------------------------------------
// ⭐ GET SINGLE PROJECT (cached)
// --------------------------------------
router.get("/get/:id", async (req, res) => {
  try {
    const cacheKey = `project_${req.params.id}`;

    const cachedProject = getCache(cacheKey);
    if (cachedProject) {
      return res.json({
        fromCache: true,
        data: cachedProject,
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Save in cache
    setCache(cacheKey, project, 10 * 60 * 1000); // 10 min

    res.json({
      fromCache: false,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error fetching project",
      details: err.message,
    });
  }
});

// --------------------------------------
// ⭐ ADD NEW PROJECT (invalidate cache)
// --------------------------------------
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, link, techStack, github, category, video } =
      req.body;

    if (!title || !description || !link || !github || !category) {
      return res.status(400).json({
        error:
          "All fields (title, description, link, github, category) are required",
      });
    }

    const image = req.file ? req.file.path : "";
    const parsedTechStack = techStack ? JSON.parse(techStack) : [];

    const newProject = new Project({
      title,
      description,
      link,
      github,
      image,
      video,
      techStack: parsedTechStack,
      category,
    });

    await newProject.save();

    // 🔥 Cache Invalidation
    deleteCache("all_projects");

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: newProject,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error saving project",
      details: err.message,
    });
  }
});

export default router;
