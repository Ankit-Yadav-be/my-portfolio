import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; // to work with paths
import ProjectApi from './src/routes/ProjectApi.js';
import testimonialRoutes from "./src/routes/testimonialRoute.js"
import VisitorRoute from "./src/routes/VisitorApi.js";
import hakerrankapi from "./src/routes/hakerrankApi.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();
const corsOptions = {
  origin:"https://my-portfolio-blue-alpha-48.vercel.app",
  credentials:true
}

app.use(cors(corsOptions));
app.use(express.json());


app.use('/uploads', express.static(path.join(_dirname, 'uploads')));



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
