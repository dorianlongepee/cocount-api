import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const CategoryModel = mongoose.model("Category", categorySchema);

CategoryModel.insertMany([
  { name: "Restauration" },
  { name: "Hébergement" },
  { name: "Transport" },
  { name: "Loisirs" },
  { name: "Shopping" },
]);
