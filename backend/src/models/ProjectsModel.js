import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    link: String,
    github: String,
    image: String,
    video: String,
    techStack: [String],
    category: {
      type: String,
      enum: ["web", "android"],
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
