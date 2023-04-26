const { Task } = require("../models/task");
const asyncWrapper = require("../middleware/async");
const _ = require("lodash");
const mongoose = require("mongoose");

// POST /
const createTask = asyncWrapper(async (req, res) => {
  const { name, checked } = _.pick(req.body, ["name", "checked"]);
  const task = await Task.create({
    name,
    checked: checked ? checked : false,
  });

  res.status(201).send(task);
});

// GET /
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find().sort("name");

  res.send(tasks);
});

// GET /:id
const getTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (!task) return res.status(404).send("Task not found.");
  res.send(task);
});

// PATCH /:id
const updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const { name, checked } = _.pick(req.body, ["name", "checked"]);
  const task = await Task.findByIdAndUpdate(
    id,
    { name, checked },
    { new: true }
  );

  if (!task) return res.status(404).send("Task not found.");
  res.send(task);
});

// DELETE /:id
const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndRemove(id);

  if (!task) return res.status(404).send("Task not found.");
  res.send(task);
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
