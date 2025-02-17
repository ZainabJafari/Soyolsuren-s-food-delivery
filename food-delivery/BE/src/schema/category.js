import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  }
});

export const CategoryModel = model("category", categorySchema);
