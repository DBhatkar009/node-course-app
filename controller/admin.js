const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-products", {
    pageTitle: "Add-Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCss: true,
  });
};

exports.postNewProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/add-product-list", {
      data: products,
      pageTitle: "Admin Products",
      path: "/admin/add-product-list",
    });
  });
};
