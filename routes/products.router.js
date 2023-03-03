const express = require('express');
// services
const ProductServices = require('../services/product.service');

// router
const router = express.Router();
const service = new ProductServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// get params
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);

    if (!product || product.length === 0) {
      return res.status(404).json({
        message: 'Not found',
      });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

// create Product
router.post('/', async (req, res) => {
  const { body } = req;
  const newProduct = await service.create(body);

  res.status(201).json(newProduct);
});

// update
router.patch('/:id', async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const productUpdated = await service.update({ id, changes: body });
    res.status(200).json(productUpdated);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// Deleted
router.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  const productDeleted = await service.delete(id);

  res.status(200).json(productDeleted);
});

module.exports = router;
