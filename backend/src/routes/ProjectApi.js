import express from "express";
import Project from "../models/ProjectsModel.js";
import upload from "../middlewares/uploads.js";

const router = express.Router();

// Get all projects
router.get("/get", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects", details: err.message });
  }
});

// ⭐ Get single project
router.get("/get/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Error fetching project", details: err.message });
  }
});

// Add new project
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, link, techStack, github, category, video } = req.body;

    if (!title || !description || !link || !github || !category) {
      return res.status(400).json({
        error: "All fields (title, description, link, github, category) are required"
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
      category
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: "Error saving project", details: err.message });
  }
});

export default router;
