const chalk = require("chalk");
const config = require("dotenv").config();
const mongoose = require("mongoose");
const winston = require("winston");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log(
      chalk.hex("#00FF00")(`Connected to ${process.env.connectionString} ...`)
    );
    winston.info(`Connected to ${process.env.connectionString}`);
  } catch (err) {
    console.error(chalk.hex("#FF0000")(err));
  }
};

module.exports = connectDB;
