import express from 'express';
import ExpenseService from "../../services/ExpenseService";

export const expenseApi = express.Router();

expenseApi.post('/', async (req, res, next) => {
    try {
        const expense = await ExpenseService.createExpense(req.body);
        return res.status(200).json(expense)
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
        const expense = await ExpenseService.updateExpense(req.params.id, req.body);
        return res.status(200).json(expense)
    } catch (e) {
        next(e)
    }
})

expenseApi.delete('/:id', async (req, res, next) => {
    try {
        const expense = await ExpenseService.deleteExpense(req.params.id);
        return res.status(200).json(expense)
    } catch (e) {
        next(e)
    }
})

expenseApi.get('/group/:id', async (req, res, next) => {
    try {
        const expenses = await ExpenseService.getExpensesByGroup(req.params.id);
        return res.status(200).json(expenses)
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

expenseApi.get('/user/:userId/group/:groupId', async (req, res, next) => {
    try {
        const expenses = await ExpenseService.getExpensesByUserAndGroup(req.params.userId, req.params.groupId);
        return res.status(200).json(expenses)
    } catch (e) {
        next(e)
    }
})

expenseApi.post('/:id/add-beneficiaries', async (req, res, next) => {
    try {
        const expense = await ExpenseService.addBenefiaries(req.params.id, req.body);
        return res.status(200).json(expense)
    } catch (e) {
        next(e)
    }
})