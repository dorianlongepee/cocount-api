import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    beneficiaries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    refunded: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const ExpenseModel = mongoose.model("Expense", expenseSchema);