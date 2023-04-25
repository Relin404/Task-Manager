const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

exports.taskSchema = taskSchema;
exports.Task = Task;
