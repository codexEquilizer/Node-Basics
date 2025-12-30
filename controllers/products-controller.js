const Product = require("../models/products-model");

exports.getAddProducts = (req, res, next) => {
  res.status(200).render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.status(200).redirect("/");
};

exports.getProducts = (req, res, next) => {
  // console.log(products);
  Product.fetchAll((allProducts) => {
    res.render("shop", { prods: allProducts, pageTitle: "Shop", path: "/" });
  });
};
