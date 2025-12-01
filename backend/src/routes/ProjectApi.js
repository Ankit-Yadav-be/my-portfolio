import express from "express";
import Project from "../models/ProjectsModel.js";
import upload from "../middlewares/uploads.js";
import { getCache, setCache, deleteCache } from "../utils/cache.js";

const router = express.Router();

/* =====================================================
   ⭐ GET ALL PROJECTS (Redis Cache)
===================================================== */
router.get("/get", async (req, res) => {
  try {
    const cacheKey = "all_projects";

    // 🔥 Check Redis cache
    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      return res.json({
        fromCache: true,
        total: cachedData.length,
        data: cachedData,
      });
    }

    // ⏳ Fetch from DB
    const projects = await Project.find().sort({ createdAt: -1 });

    // 💾 Save in Redis for 10 minutes
    await setCache(cacheKey, projects, 600);

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

/* =====================================================
   ⭐ GET SINGLE PROJECT (Redis Cache)
===================================================== */
router.get("/get/:id", async (req, res) => {
  try {
    const cacheKey = `project_${req.params.id}`;

    // 🔥 Check Redis cache
    const cachedProject = await getCache(cacheKey);
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

    // 🕒 Cache TTL = 600s (10 minutes)
    await setCache(cacheKey, project, 600);

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

/* =====================================================
   ⭐ ADD NEW PROJECT (Invalidate Redis Cache)
===================================================== */
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

    // 🔥 Delete old cached list
    await deleteCache("all_projects");

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
