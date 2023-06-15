import express from 'express';
import ExpenseService from "../../services/ExpenseService";

export const expenseApi = express.Router();

expenseApi.post('/', async (req, res, next) => {
    try {
        const expense = await ExpenseService.createExpense(req.body);
        return res.status(201).json(expense)
    } catch (e) {
        next(e)
    }
})

expenseApi.get('/:id', async (req, res, next) => {
    try {
        const expense = await ExpenseService.getExpense(req.params.id);
        return res.status(200).json(expense)
    } catch (e) {
        next(e)
    }
})

expenseApi.put('/:id', async (req, res, next) => {
    try {
        const expense = ExpenseService.updateExpense(req.params.id, req.body);
        return res.status(200).json(expense)
    } catch (e) {
        next(e)
    }
})

expenseApi.delete('/:id', async (req, res, next) => {
    try {
        await ExpenseService.deleteExpense(req.params.id);
        return res.status(201).json({message: "Expense deleted"})
    } catch (e) {
        next(e)
    }
})

expenseApi.get('/user/:id', async (req, res, next) => {
    try {
        const expenses = await ExpenseService.getExpensesByUser(req.params.id);
        return res.status(200).json(expenses)
    } catch (e) {
        next(e)
    }
})

expenseApi.get('/', async (req, res, next) => {
    try {
        const expenses = await ExpenseService.getExpenses();
        return res.status(200).json(expenses)
    } catch (e) {
        next(e)
    }
})