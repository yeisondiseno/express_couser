const express = require('express');
const app = express();
const port = '3005';

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer servidor');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000,
  });
});

app.get('/home', (req, res) => {
  res.send('Hola, Este es un home');
});

app.listen(port, () => {
  console.log('Trabaja ', port);
});
