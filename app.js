const chalk = require("chalk");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());

// DB
connectDb();

// Routes
app.use("/api/v1/tasks", tasks);

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(chalk.hex("#0000FF")(`Listening on port ${port}...`))
);
