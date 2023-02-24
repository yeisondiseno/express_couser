const express = require('express');
const faker = require('faker');

// data
const app = express();
const port = '3005';

app.get('/', (_, res) => {
  res.send('Hola, este es mi primer servidor');
});

// get method
app.get('/productos', (_, res) => {
  const products = [];

  for (let index = 0; index < 100; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

// get params
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

// get query params
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    return res.json({
      limit,
      offset,
    });
  }

  res.send('No hay parámetros');
});

app.listen(port, () => {
  console.log('Trabaja ', port);
});
