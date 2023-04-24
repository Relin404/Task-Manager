const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.post("/", createTask);

router.get("/", getAllTasks);

router.get("/:id", (req, res) => {
  res.send("Task1: ");
});

router.put("/:id", (req, res) => {
  res.send("Task1: ");
});

router.delete("/:id", (req, res) => {
  res.send("Task deleted!");
});

module.exports = router;
