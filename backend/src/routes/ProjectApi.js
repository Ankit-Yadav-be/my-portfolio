import express from "express";
import Project from "../models/ProjectsModel.js";
import upload from "../middlewares/uploads.js";

const router = express.Router();

/* =====================================================
   ⭐ GET ALL PROJECTS
===================================================== */
router.get("/get", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.json({
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
   ⭐ GET SINGLE PROJECT
===================================================== */
router.get("/get/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({
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
   ⭐ ADD NEW PROJECT
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
