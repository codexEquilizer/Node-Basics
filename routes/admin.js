const express = require("express");
const path = require("path");
const router = express.Router();

// const rootDir = require("../util/path.js");
const productsController = require("../controllers/products-controller.js");

// router middlewares
router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
