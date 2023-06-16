import express from "express";
import CategoryService from "../../services/CategoryService";

export const categoryApi = express.Router();

categoryApi.get("/", async (req, res, next) => {
  try {
    const categories = await CategoryService.getCategories();
    res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
});

categoryApi.post("/", async (req, res, next) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
});

categoryApi.get("/:id", async (req, res, next) => {
  try {
    const category = await CategoryService.getCategory(req.params.id);
    res.status(200).json(category);
  } catch (e) {
    next(e);
  }
});

categoryApi.put("/:id", async (req, res, next) => {
  try {
    const category = await CategoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
});

categoryApi.delete("/:id", async (req, res, next) => {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.status(204).json();
  } catch (e) {
    next(e);
  }
});
