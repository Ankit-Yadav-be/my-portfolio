import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String }, // Image path store karega
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
