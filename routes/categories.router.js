const express = require('express');
const router = express.Router();

router.get('/:categoryId/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
