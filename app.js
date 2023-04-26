const chalk = require("chalk");
const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const tasksRouter = require("./routes/tasks");
const errorHandlerMiddleware = require("./middleware/error");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(errorHandlerMiddleware);

// DB
connectDb();

// Routes
app.use("/api/v1/tasks", tasksRouter);

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(chalk.hex("#0000FF")(`Listening on port ${port}...`))
);
