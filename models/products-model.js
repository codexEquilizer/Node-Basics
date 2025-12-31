const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path");

// const products = [];

//helper constant
const FILE_PATH = path.join(rootDir, "data", "products.json");

// helper Function
const helper_getProductsFromFile = (callback) => {
  /* To read the existing array of products, I need to read the file first  */
  fs.readFile(FILE_PATH, (err, fileContent) => {
    if (err) return callback([]);
    callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    helper_getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(FILE_PATH, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // products.push(this.title);
  }

  static fetchAll(callback) {
    helper_getProductsFromFile(callback);
    // return products;
  }
};
