const Task = require('../models/Task');

const getAll = async (id) => {
  const data = await Task.find({});
  // const data = await Task.find({ 'fromUser': [ id ] });
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

const update = async (id, body) => {
  let task = await Task.findById(id);
  
  task.isCompleted = body.isCompleted;
  task.title = body.title;

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
  update,
  remove
};