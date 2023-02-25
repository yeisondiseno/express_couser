const express = require('express');
// services
const ProductServices = require('../services/product.service');

// router
const router = express.Router();
const service = new ProductServices();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// get params
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  if (!product || product.length === 0) {
    return res.status(404).json({
      message: 'Not found',
    });
  }

  res.status(200).json(product);
});

// create Product
router.post('/', (req, res) => {
  const { body } = req;

  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

// update
router.patch('/:id', (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  res.json({
    message: 'Created',
    data: {
      id,
      ...body,
    },
  });
});

// update
router.delete('/:id', (req, res) => {
  const {
    params: { id },
  } = req;

  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
