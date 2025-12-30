const express = require("express");
const router = express.Router();
const path = require("path");

// const rootDir = require("../util/path.js");
const productsController = require("../controllers/products-controller.js");

router.get("/", productsController.getProducts);

module.exports = router;
