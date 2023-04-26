const chalk = require("chalk");
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const startLogging = require("./utils/logging");
const tasksRouter = require("./routes/tasks");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(errorHandlerMiddleware);

// Utilities
connectDB();
startLogging();

// Routes
app.use("/api/v1/tasks", tasksRouter);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(chalk.hex("#0000FF")(`Listening on port ${port}...`))
);
