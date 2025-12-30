const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    //storing in file
    const filePath = path.join(rootDir, "data", "products.json");
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // products.push(this.title);
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "products.json");
    fs.readFile(filePath, (err, fileContent) => {
      if (err) callback([]);
      callback(JSON.parse(fileContent));
    });
    // return products;
  }
};
