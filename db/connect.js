const chalk = require("chalk");
const config = require("dotenv").config();
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.connectionString)
    .then(() =>
      console.log(
        chalk.bgHex("#0F0F0F")(
          chalk.hex("#00FF00")(
            `Connected to ${process.env.connectionString} ...`
          )
        )
      )
    )
    .catch((err) => console.log(chalk.hex("#FF0000")(`${err}`)));
};
