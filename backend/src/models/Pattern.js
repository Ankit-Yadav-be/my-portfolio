import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  title: { type: String, required: true },
  link: { type: String, required: true },
  platform: {
    type: String,
    enum: ["LeetCode", "CodeChef", "HackerRank", "Codeforces", "GFG"],
    required: true,
  },
});

const patternSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true, unique: true },
    problems: [problemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Pattern", patternSchema);
