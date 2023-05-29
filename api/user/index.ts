import express from 'express';
import {User} from "../../types/user";
import UserService from "../../services/UserService";

export const userApi = express.Router();

userApi.post('/signup',
  //validate format of request body,
  async (req, res) => {
    try {
      const userDTO = req.body as User;
      const user = await UserService.signup(userDTO);
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
    }
  }
);
userApi.get('/:id',
  async (req, res) => {
    try {
      const user = await UserService.getUserInfos(req.params.id);
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
    }
  }
)

userApi.put('/:id',
  async (req, res) => {
    try {
      const user = await UserService.updateUserInfos(req.params.id, req.body);
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
    }
  }
)

userApi.delete('/:id',
  async (req, res) => {
    try {
      const user = await UserService.deleteUser(req.params.id);
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
    }
  }
)

userApi.post('/login',
  //validate format of request body,
  async (req, res) => {
    try {
      const user = await UserService.login(req.body.email);
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
    }
  }
)
