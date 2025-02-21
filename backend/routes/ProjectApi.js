import express from "express";
import Project from "../models/ProjectsModel.js";
import upload from "../middlewares/uploads.js"; // Cloudinary Multer config

const router = express.Router();

// Get all projects
router.get("/get", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects", details: err.message });
  }
});

// Add new project
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, link, techStack, github } = req.body;

    // Validate required fields
    if (!title || !description || !link || !github) {
      return res.status(400).json({ error: "All fields (title, description, link, github) are required" });
    }

    const image = req.file ? req.file.path : ""; // Cloudinary se image URL milega
    const parsedTechStack = techStack ? JSON.parse(techStack) : [];

    const newProject = new Project({ title, description, link, github, image, techStack: parsedTechStack });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: "Error saving project", details: err.message });
  }
});

export default router;
