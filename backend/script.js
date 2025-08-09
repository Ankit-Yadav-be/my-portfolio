import mongoose from "mongoose";
import Project from "./src/models/ProjectsModel.js"; // apna model path

await mongoose.connect("mongodb+srv://ay870421:MONGOURL@cluster0.nbs3n.mongodb.net/?retryWrites=true&w=majority&appName=MyPortfolio");

await Project.updateMany(
  { category: { $exists: false } },
  { $set: { category: "web" } }
);

console.log("Migration done!");
process.exit();
