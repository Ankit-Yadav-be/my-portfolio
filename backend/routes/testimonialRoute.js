import express from "express";
import multer from "multer";
import Testimonial from "../models/Testimonial.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// ✅ Ensure Uploads Directory Exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// ✅ Get all testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add a new testimonial with image (Updated Logic)
router.post("/addtestimonials", upload.single("image"), async (req, res) => {
  try {
    const { name, designation, message } = req.body;

    // Check Required Fields
    if (!name || !designation || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Store Image Path (Similar to Your Existing Project API)
    const image = req.file ? req.file.path : "";

    const newTestimonial = new Testimonial({ name, designation, message, image });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: "Error saving testimonial", details: error.message });
  }
});

// ✅ Serve Uploaded Images Correctly
router.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

export default router;
