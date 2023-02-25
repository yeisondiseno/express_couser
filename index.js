const express = require('express');
// routes
const routerApi = require('./routerApi');

// data
const app = express();
const port = '3005';

// middleware
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('Trabaja ', port);
});
