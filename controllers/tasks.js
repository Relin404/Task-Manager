const tasks = [];

const createTask = (req, res) => {
  const task = req.body.task ? req.body.task : "empty";
  tasks.push(tasks);
  res.json(task);
};

const getAllTasks = (req, res) => {
  res.send(tasks);
};

const getTask = (req, res) => {
  const id = req.params.id;
  const indexOfTask = tasks.at(id);
  res.json(tasks[indexOfTask]);
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const newTask = req.body.task;
  const indexOfTask = tasks.at(id);
  tasks[indexOfTask] = newTask;
  res.json(tasks[indexOfTask]);
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const indexOfTask = tasks.at(id);
  // tasks.slice
  res.json(tasks[indexOfTask]);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
