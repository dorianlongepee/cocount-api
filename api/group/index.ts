import express from 'express'

import GroupService from "../../services/GroupService";

export const groupApi = express.Router();

groupApi.post('/', async (req, res, next) => {
  try {
    const group = await GroupService.createGroup(req.body);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})

groupApi.get('/:id', async (req, res, next) => {
  try {
    const group = await GroupService.getGroup(req.params.id);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})

groupApi.put('/:id', async (req, res, next) => {
  try {
    const group = await GroupService.updateGroup(req.params.id, req.body);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})

groupApi.delete('/:id', async (req, res, next) => {
  try {
    const group = await GroupService.deleteGroup(req.params.id);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})

groupApi.post('/:id/addUser', async (req, res, next) => {
  try {
    const group = await GroupService.addUser(req.params.id, req.body);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})

groupApi.post('/:id/removeUser', async (req, res, next) => {
  try {
    const group = await GroupService.removeUser(req.params.id, req.body);
    return res.status(200).json(group)
  } catch (e) {
    next(e)
  }
})