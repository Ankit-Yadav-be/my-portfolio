import Problem from "../models/Problem.js";

// @desc Create new problem
export const createProblem = async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(201).json(problem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Get all problems with filters
export const getProblems = async (req, res) => {
  try {
    const { category, difficulty, search } = req.query;

    let query = {};

    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (search) {
      query.title = { $regex: search, $options: "i" }; // case-insensitive search
    }

    const problems = await Problem.find(query).sort({ createdAt: -1 });
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get single problem by ID
export const getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update problem
export const updateProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.json(problem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Delete problem
export const deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.json({ message: "Problem removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
