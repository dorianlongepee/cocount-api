import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    beneficiaries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    date: {
        type: Date,
        required: true,
    },
})

export const ExpenseModel = mongoose.model("Expense", expenseSchema);