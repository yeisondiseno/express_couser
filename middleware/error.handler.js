function logErrors(error, req, res, next) {
  console.error(error);
  console.log('logErrors');

  next(error);
}

function errorHandler(error, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler };
