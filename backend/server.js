import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ProjectApi from './routes/ProjectApi.js';
import testimonialRoutes from "./routes/testimonialRoute.js"
import VisitorRoute from "./routes/VisitorApi.js";
import hakerrankapi from "./routes/hakerrankApi.js";
import path from "path";
dotenv.config();
const _dirname = path.resolve();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (images) from the 'uploads' folder
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Project routes
app.use("/api", ProjectApi);
app.use("/api",testimonialRoutes);
app.use("/api",VisitorRoute);
app.use("/api",hakerrankapi);

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
