import express from "express";
import axios from "axios";
import Visitor from "../models/VisitorModel.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// 🟢 Track Visitor API (POST)
router.post("/track-visitor", async (req, res) => {
  try {
    const { ip, device, browser } = req.body;

    // Pehle check karein ki visitor exist karta hai ya nahi
    let visitor = await Visitor.findOne({ ip });

    if (visitor) {
      // Agar visitor exist karta hai to sirf `visitedAt` update karein
      visitor.visitedAt = new Date();
      await visitor.save();
      return res.status(200).json({ message: "Visitor time updated" });
    }

    // Agar naya visitor hai to location fetch karein
    const { data } = await axios.get(`https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_TOKEN}`);

    // Naya visitor create karein
    visitor = new Visitor({
      ip,
      location: data.loc,
      country: data.country,
      city: data.city,
      device,
      browser,
      visitedAt: new Date(),
    });

    await visitor.save();
    res.status(201).json({ message: "New visitor logged successfully" });

  } catch (error) {
    console.error("Error tracking visitor:", error);
    res.status(500).json({ error: "Failed to log visitor" });
  }
});

// 🟢 Get All Visitors API (GET)
router.get("/get-visitors", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ visitedAt: -1 });
    res.json(visitors);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    res.status(500).json({ error: "Failed to fetch visitors" });
  }
});

export default router;
