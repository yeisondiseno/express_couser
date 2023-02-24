const express = require('express');
const app = express();
const port = '3005';

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer servidor');
});

app.listen(port, () => {
  console.log('Trabaja ', port);
});
