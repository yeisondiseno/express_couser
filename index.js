const express = require('express');
const app = express();
const port = '3005';

app.get('/', (_, res) => {
  res.send('Hola, este es mi primer servidor');
});

app.get('/productos', (_, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000,
    },
    {
      name: 'Producto 2',
      price: 2000,
    },
    {
      name: 'Producto 3',
      price: 3000,
    },
  ]);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Producto 1',
    price: 1000,
  });
});

app.get('/categories/:categoryId/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Trabaja ', port);
});
