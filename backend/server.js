import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import ProjectApi from "./src/routes/ProjectApi.js";
import testimonialRoutes from "./src/routes/testimonialRoute.js";
import VisitorRoute from "./src/routes/VisitorApi.js";
import hakerrankapi from "./src/routes/hakerrankApi.js";
import problemRoutes from "./src/routes/problemRoutes.js";

dotenv.config();

const app = express();
const _dirname = path.resolve();

// ✅ Allow specific origin (your frontend)
app.use(
  cors({
    origin: "https://my-portfolio-blue-alpha-48.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(_dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api", ProjectApi);
app.use("/api", testimonialRoutes);
app.use("/api", VisitorRoute);
app.use("/api", hakerrankapi);
app.use("/api/problems", problemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

export default app;
