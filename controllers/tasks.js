const tasksService = require('../services/tasks');
const usersController = require('./users');

const getAll = async (req, res, next) => {
  const id = await usersController.getUserIdByToken(req);

  try {
    const data = await tasksService.getAll(id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const data = await tasksService.getById(req.params);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  const id = await usersController.getUserIdByToken(req);

  try {
    const data = await tasksService.create(id, req.body);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const complete = async (req, res, next) => {
  try {
    await tasksService.complete(req.params, req.body);
    const data = await tasksService.getById(req.params);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    await tasksService.remove(req.params);
    res.status(200).json('Task has been removed');
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  complete,
  remove
};
