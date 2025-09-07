import express from "express";
import {
  createProblem,
  getProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
} from "../controller/problemController.js";

const router = express.Router();

// @desc Add new problem
router.post("/", createProblem);

// @desc Get all problems (with optional filters)
router.get("/", getProblems);

// @desc Get single problem by ID
router.get("/:id", getProblemById);

// @desc Update problem
router.put("/:id", updateProblem);

// @desc Delete problem
router.delete("/:id", deleteProblem);

export default router;
