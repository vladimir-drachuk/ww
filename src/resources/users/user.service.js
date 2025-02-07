const usersRepo = require('./user.db.repository');
const taskService = require('../tasks/tasks.service');

const getAll = () => usersRepo.getAll();

const createUser = newUser => usersRepo.createUser(newUser);

const getUser = id => usersRepo.getUser(id);

const updateUser = (id, updateInfo) => usersRepo.updateUser(id, updateInfo);

const deleteUser = id => {
  usersRepo.deleteUser(id);
  taskService.clearTaskByUserId(id);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
