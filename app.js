const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Middlewares
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.status(400).send(`Hello you fucker`);
});

app.use("/api/v1/tasks", tasks);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
