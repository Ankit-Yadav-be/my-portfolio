// models/Problem.js
import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "Deployment",
        "File Upload",
        "Authentication",
        "Database",
        "Frontend",
        "Git",
        "Optimization",
        "AI Integration"
      ], // fix categories for filtering
      required: true,
    },
    problemStatement: {
      type: String,
      required: true,
    },
    whyItHappens: {
      type: String,
      required: true,
    },
    solutionSteps: [
      {
        stepNumber: Number,
        description: String,
        codeSnippet: String, // optional code blocks
      },
    ],
    commonMistakes: [
      {
        type: String,
      },
    ],
    resources: [
      {
        label: String, // e.g. "Official Docs", "YouTube Tutorial"
        url: String,
      },
    ],
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // future feature: community contributions
    },
  },
  { timestamps: true }
);

export default mongoose.model("Problem", problemSchema);
