import {CategoryModel} from "../models/category";
import ApiError from "../error/ApiError";
import {Category} from "../types/category";

export default class CategoryService {
    public static async getCategories() {
        try {
            return await CategoryModel.find();
        } catch (e) {
            throw ApiError.internal("Error while fetching categories");
        }
    }

    public static async createCategory(category: Category) {
        try {
            return await CategoryModel.create(category)
        } catch (e) {
            throw ApiError.internal("Error while creating category");
        }
    }

    public static async getCategory(id: string) {
        try {
            return await CategoryModel.findById(id);
        } catch (e) {
            throw ApiError.internal("Error while fetching category");
        }
    }

    public static async updateCategory(id: string, category: Category) {
        try {
            await CategoryModel.findByIdAndUpdate(id, category);
            return CategoryModel.findById(id);
        } catch (e) {
            throw ApiError.internal("Error while updating category");
        }
    }

    public static async deleteCategory(id: string) {
        try {
            return await CategoryModel.findByIdAndDelete(id);
        } catch (e) {
            throw ApiError.internal("Error while deleting category");
        }
    }
}