import express from "express";
import upload from "../middlewares/uploads.js";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// ✅ Get all testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add a new testimonial with Cloudinary Image Upload
router.post("/addtestimonials", upload.single("image"), async (req, res) => {
  try {
    const { name, designation, message } = req.body;

    // ✅ Check Required Fields
    if (!name || !designation || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Cloudinary Image URL
    const imageUrl = req.file ? req.file.path : "";

    // ✅ Save Data in MongoDB
    const newTestimonial = new Testimonial({ name, designation, message, image: imageUrl });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: "Error saving testimonial", details: error.message });
  }
});

export default router;
