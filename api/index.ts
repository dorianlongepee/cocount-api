import express from "express";
import UserService from "../services/UserService";

export const router = express.Router();

router.get('/login',
  async (req, res) => {
    return res.json({message: "hello"})
  }
)
router.post('/login',
  //middleware.ifNeeded,
  async (req, res) => {
    const userDTO = req.body;
    const {firstname, lastname} = await UserService.login(userDTO);
    return res.json({firstname, lastname})
  }
);