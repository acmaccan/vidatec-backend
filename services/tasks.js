const tasksRepo = require('../repositories/tasks');

const getAll = async (req) => {
  const data = await tasksRepo.getAll(req);
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

const create = async (body) => {
  const data = await tasksRepo.create(body);
  return data;
};

const update = async (params, body) => {
  const data = await tasksRepo.update(params.id, body);
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
  update,
  remove
};