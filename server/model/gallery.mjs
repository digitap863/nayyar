import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    Image: {
      type: String,
      required: [true, "Image is required"],
    }
  },
  {
    timestamps: true,
  }
);

const Gallery =  mongoose.model("Gallery", gallerySchema);

export default Gallery;
