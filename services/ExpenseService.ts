import {Expense} from "../types/expense";
import {ExpenseModel} from "../models/expense";
import ApiError from "../error/ApiError";
import {GroupModel} from "../models/group";

export default class ExpenseService {
    public static async createExpense(expense: Expense) {
        const newExpense = new ExpenseModel({
            name: expense.name,
            amount: expense.amount,
            paidBy: expense.paidBy,
            beneficiaries: expense.beneficiaries,
            group: expense.group,
            date: expense.date,
            refunded: expense.refunded
        })
        try {
            await newExpense.save();
            await GroupModel.findByIdAndUpdate(
                expense.group,
                {$push: {expenses: newExpense._id}}
            )
        } catch (e) {
            throw ApiError.internal("Something went wrong during expense creation")
        }
    }

    public static async getExpense(id: string) {
        try {
            return ExpenseModel.findById(id);
        } catch (e) {
            throw ApiError.notFound("Expense not found")
        }
    }

    public static async getExpensesByGroup(groupId: string) {
        try {
            return ExpenseModel.find({group: groupId});
        } catch (e) {
            throw ApiError.notFound("Expense not found")
        }
    }

    public static async updateExpense(id: string, expense: Expense) {
        try {
            return ExpenseModel.findByIdAndUpdate(id, expense);
        } catch (e) {
            throw ApiError.internal("Something went wrong during expense update")
        }
    }

    public static async deleteExpense(id: string) {
        try {
            return ExpenseModel.findByIdAndDelete(id);
        } catch (e) {
            throw ApiError.internal("Something went wrong during expense deletion")
        }
    }

    public static async getExpensesByUser(userId: string) {
        try {
            return ExpenseModel.find({$or: [{paidBy: userId}, {beneficiaries: userId}]});
        } catch (e) {
            throw ApiError.notFound("Expense not found")
        }
    }

    public static async getExpensesByUserAndGroup(userId: string, groupId: string) {
        return ExpenseModel.find({$or: [{paidBy: userId}, {beneficiaries: userId}], group: groupId});
    }

    public static async addBenefiaries(id: string, beneficiaries: string[]) {
        return ExpenseModel.findByIdAndUpdate(id, {beneficiaries: beneficiaries});
    }
}