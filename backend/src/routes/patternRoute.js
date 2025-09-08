import express from "express";
import {
  addPattern,
  addProblem,
  getPatterns,
  getPatternByTopic,
} from "../controller/patternController.js";

const router = express.Router();

// POST: Add new pattern
router.post("/add", addPattern);

// POST: Add problem in existing pattern
router.post("/:topic/add-problem", addProblem);

// GET: All patterns
router.get("/", getPatterns);

// GET: Single pattern by topic
router.get("/:topic", getPatternByTopic);

export default router;
