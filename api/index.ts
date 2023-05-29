import express from "express";

import {userApi} from "./user";

export const router = express.Router();

router.use('/user', userApi);