const express = require('express');
// routes
const routerApi = require('./routerApi');
// middleware
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

// data
const app = express();
const port = '3005';

// middleware
app.use(express.json());

routerApi(app);

// middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Trabaja ', port);
});
