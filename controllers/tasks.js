const tasksService = require('../services/tasks');

const getAll = async (req, res, next) => {
  try {
    const data = await tasksService.getAll(req.data);
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
  try {
    const data = await tasksService.create(req.body);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    await tasksService.update(req.params, req.body);
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
  update,
  remove
};
