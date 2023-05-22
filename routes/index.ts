import express from "express";
import {response} from "./responses";
import {ControllerUser} from "../controllers/ControllerUser";
export const router = express.Router();
router.get('/', response(ControllerUser.getHelloWorld));