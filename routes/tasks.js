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
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
