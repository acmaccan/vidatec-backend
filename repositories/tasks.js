const Task = require('../models/Task');

const getAll = async (id) => {
  const data = await Task.find({ 'isDeleted': false, 'fromUser': [ id ] });
  return data;
};

const getById = async (id) => {
  const data = await Task.findById(id);
  return data;
};

const create = async (body) => {
  const data = await Task.create(body);
  return data;
};

const complete = async (id, isCompleted) => {
  let task = await Task.findById(id);

  task.isCompleted = isCompleted;
  
  const data = await task.save();
  return data;
};

const remove = async (id) => {
  let task = await Task.findById(id);
  task.isDeleted = true;

  const data = await task.save();
  return data;
};

module.exports = {
  getAll,
  getById,
  create,
  complete,
  remove
};