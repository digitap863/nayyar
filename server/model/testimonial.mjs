import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    Image: {
      type: String,
      required:true
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;