const boardsRepo = require('./boards.db.repository');
const tasksService = require('../tasks/tasks.service');

const getAll = () => boardsRepo.getAll();

const createBoard = newBoard => boardsRepo.createBoard(newBoard);

const getBoard = id => boardsRepo.getBoard(id);

const updateBoard = (board, updateInfo) =>
  boardsRepo.updateBoard(board, updateInfo);

const deleteBoard = id => {
  boardsRepo.deleteBoard(id);
  tasksService.deleteTaskByBoard(id);
};

module.exports = { getAll, createBoard, getBoard, updateBoard, deleteBoard };
