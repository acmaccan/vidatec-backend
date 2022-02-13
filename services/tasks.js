const tasksRepo = require('../repositories/tasks');

const getAll = async (id) => {
  const data = await tasksRepo.getAll(id);
  return data;
};

const getById = async (params) => {
  const id = params.id;
  const data = await tasksRepo.getById(id);
  if (!data) {
    const error = new Error('The task does not exist.');
    throw error;
  }
  return data;
};

const create = async (id, body) => {
  const task = {
    ...body,
    fromUser: id
  }

  const data = await tasksRepo.create(task);
  return data;
};

const complete = async (params, body) => {
  const data = await tasksRepo.complete(params.id, body.isCompleted);
  return data;
};

const remove = async (params) => {
  const id = params.id;
  const data = await tasksRepo.remove(id);
  if (data === 0) {
    const error = new Error('Task not found');
    throw error;
  }
  return data;
};

module.exports = {
  getAll,
  getById,
  create,
  complete,
  remove
};