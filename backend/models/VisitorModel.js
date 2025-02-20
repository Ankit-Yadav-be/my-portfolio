import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ip: String,
  location: String,
  country: String,
  city: String,
  device: String,
  browser: String,
  visitedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Visitor", visitorSchema);
