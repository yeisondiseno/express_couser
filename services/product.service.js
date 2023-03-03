const faker = require('faker');

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
      }, 5 * 1000);
    });
  }

  async findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  async update({ id, changes }) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }

    const product = this.products[index];
    this.products[index] = { ...product, ...changes, id };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }

    this.products.splice(index, 1);

    return {
      message: 'Product deleted',
      id,
    };
  }
}

module.exports = ProductServices;
