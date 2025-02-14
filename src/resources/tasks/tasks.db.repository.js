const Task = require('../tasks/tasks.model');

const getAll = () => Task.find({}).exec();

const getAllById = id => Task.find({ boardId: id }).exec();

const createTask = async (id, newTask) => {
  const task = await Task.create(Object.assign(newTask, { boardId: id }));
  task.id = task._id;
  task.save();
  return task;
};

const getTaskById = id => Task.findOne({ id }).exec();

const clearTaskByUserId = async id => {
  const tasksList = await Task.find({ userId: id });
  tasksList.forEach(item => {
    item.userId = null;
    item.save();
  });
};

const updateTask = async (params, updateInfo) =>
  Task.updateOne(
    { id: params.taskId },
    Object.assign(updateInfo, {
      boardId: params.id,
      id: params.taskId
    })
  ).exec();

const deleteTask = id => Task.deleteOne({ id }).exec();

const deleteTaskByBoard = boardId => Task.deleteMany({ boardId });

module.exports = {
  getAll,
  getAllById,
  createTask,
  getTaskById,
  clearTaskByUserId,
  updateTask,
  deleteTask,
  deleteTaskByBoard
};
