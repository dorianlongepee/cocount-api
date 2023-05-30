import express from "express";

import {userApi} from "./user";
import {groupApi} from "./group";

export const router = express.Router();

router.use('/user', userApi);
router.use('/group', groupApi);