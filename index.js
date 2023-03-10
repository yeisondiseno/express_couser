const express = require('express');
// corse middleware
const cors = require('cors');
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
const whitelist = ['http://example1.com', 'http://example2.com'];
const corsOptions = {
  // more Info: https://www.npmjs.com/package/cors#usage
  // origin: 'https://example.com', // this line is waiting for a exceptional URl
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
  origin: (origin, callback) => {
    if (!whitelist.includes(origin)) {
      return callback(new Error('Not allowed by CORS'));
    }
    return callback(null, true);
  },
};

// Init App and can get Json info
app.use(express.json());

routerApi(app);

// middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(cors(corsOptions));

app.listen(port);
