import { Expense } from "../types/expense";
import { ExpenseModel } from "../models/expense";
import ApiError from "../error/ApiError";

export default class ExpenseService {
  public static async createExpense(expense: Expense) {
    try {
      const newExpense = new ExpenseModel({
        name: expense.name,
        category: expense.category !== "" ? expense.category : null,
        amount: expense.amount,
        paidBy: expense.paidBy,
        beneficiaries: expense.beneficiaries,
      });
      await newExpense.save();
      return ExpenseModel.find({ name: expense.name });
    } catch (e) {
      throw ApiError.internal("Something went wrong during expense creation");
    }
  }

  public static async getExpense(id: string) {
    try {
      return ExpenseModel.findById(id)
        .populate("paidBy")
        .populate("beneficiaries")
        .populate("category");
    } catch (e) {
      throw ApiError.notFound("Expense not found");
    }
  }

  public static async getExpenses() {
    try {
      return ExpenseModel.find()
        .populate("paidBy")
        .populate("beneficiaries")
        .populate("category")
        .sort({ createdAt: "asc" });
    } catch (e) {
      throw ApiError.notFound("No expenses found");
    }
  }

  public static async updateExpense(id: string, expense: Expense) {
    try {
      return ExpenseModel.findByIdAndUpdate(id, expense);
    } catch (e) {
      throw ApiError.internal("Something went wrong during expense update");
    }
  }

  public static async deleteExpense(id: string) {
    try {
      return ExpenseModel.findByIdAndDelete(id);
    } catch (e) {
      throw ApiError.internal("Something went wrong during expense deletion");
    }
  }

  public static async getExpensesByUser(userId: string) {
    try {
      return ExpenseModel.find({
        $or: [{ paidBy: userId }, { beneficiaries: userId }],
      });
    } catch (e) {
      throw ApiError.notFound("Expense not found");
    }
  }
}
