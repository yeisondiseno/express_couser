const express = require('express');
const router = express.Router();

// routes
const productsRouter = require('../routes/products.router');
const categoriesRouter = require('../routes/categories.router');
const usersRouter = require('../routes/users.router');

const routerApi = (app) => {
  // set version of routes
  const version1 = '/api/v1';
  app.use(version1, router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
};

module.exports = routerApi;
