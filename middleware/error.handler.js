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

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const {
      output: { statusCode, payload },
    } = error;

    res.status(statusCode).json(payload);
  }

  next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
