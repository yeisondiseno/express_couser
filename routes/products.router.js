const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;

  const limit = parseInt(size) || 10;
  const products = [];

  for (let index = 0; index < limit; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// get params
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Producto 1',
    price: 1000,
  });
});

// create Product
router.post('/', (req, res) => {
  const { body } = req;

  res.json({
    message: 'Created',
    data: body,
  });
});

module.exports = router;
