import Pattern from "../models/Pattern.js";

// ✅ Add new pattern (with problems)
export const addPattern = async (req, res) => {
  try {
    const { topic, problems } = req.body;

    const newPattern = new Pattern({ topic, problems });
    await newPattern.save();

    res.status(201).json({ success: true, message: "Pattern created", newPattern });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Add problem in existing pattern
export const addProblem = async (req, res) => {
  try {
    const { topic } = req.params;
    const { level, title, link, platform } = req.body;

    const pattern = await Pattern.findOne({ topic });
    if (!pattern) return res.status(404).json({ success: false, message: "Topic not found" });

    pattern.problems.push({ level, title, link, platform });
    await pattern.save();

    res.status(200).json({ success: true, message: "Problem added", pattern });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all patterns
export const getPatterns = async (req, res) => {
  try {
    const patterns = await Pattern.find();
    res.status(200).json({ success: true, patterns });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get single topic
export const getPatternByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    const pattern = await Pattern.findOne({ topic });

    if (!pattern) return res.status(404).json({ success: false, message: "Topic not found" });

    res.status(200).json({ success: true, pattern });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
