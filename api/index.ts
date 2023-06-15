import express from "express";

import {userApi} from "./user";
import {expenseApi} from "./expense";
import {categoryApi} from "./category";

export const router = express.Router();

router.use('/users', userApi);
router.use('/expenses', expenseApi);
router.use('/categories', categoryApi);