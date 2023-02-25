const express = require('express');
// routes
const routerApi = require('./routes');

// data
const app = express();
const port = '3005';

routerApi(app);

app.listen(port, () => {
  console.log('Trabaja ', port);
});
