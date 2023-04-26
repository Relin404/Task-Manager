const winston = require("winston");
const { CustomAPIError } = require("../errors/customError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  winston.error(err.message, err);

  return res
    .status(500)
    .json({ message: "Something went wrong, please try again." });
};

module.exports = errorHandlerMiddleware;
