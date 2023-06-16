import express from "express";
import { User } from "../../types/user";
import UserService from "../../services/UserService";

export const userApi = express.Router();

userApi.post(
  "/signup",
  //validate format of request body,
  async (req, res, next) => {
    try {
      const userDTO = req.body as User;
      const user = await UserService.signup(userDTO);
      return res.status(201).json(user);
    } catch (e) {
      if (e.code === 11000) {
        return res.status(400).json({ error: "Email already used" });
      }
      next(e);
    }
  }
);
userApi.get("/:id", async (req, res, next) => {
  try {
    const user = await UserService.getUserInfos(req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
});

userApi.get("/", async (req, res, next) => {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
});

userApi.put("/:id", async (req, res, next) => {
  try {
    const user = await UserService.updateUserInfos(req.params.id, req.body);
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
});

userApi.delete("/:id", async (req, res, next) => {
  try {
    await UserService.deleteUser(req.params.id);
    return res.status(204);
  } catch (e) {
    next(e);
  }
});

userApi.post(
  "/login",
  //validate format of request body,
  async (req, res, next) => {
    try {
      const user = await UserService.login(req.body.email);
      if (user === null) {
        return res.status(403).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
);
