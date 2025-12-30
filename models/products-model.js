const path = require("path");
const rootDir = require("../util/path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    //storing in file
    const filePath = path.join(rootDir, "data", products.json);

    products.push(this.title);
  }

  static fetchAll() {
    return products;
  }
};
