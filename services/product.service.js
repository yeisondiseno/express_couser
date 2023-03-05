const faker = require('faker');
const boom = require('@hapi/boom');

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create({ name, image, price }) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      image,
      price,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async find() {
    // return this.products;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 1 * 1000);
    });
  }

  async findOne(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw boom.notFound('Product not found');
    }

    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }

    return product;
  }

  async update({ id, changes }) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    const product = this.products[index];
    this.products[index] = { ...product, ...changes, id };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    this.products.splice(index, 1);

    return {
      message: 'Product deleted',
      id,
    };
  }
}

module.exports = ProductServices;
