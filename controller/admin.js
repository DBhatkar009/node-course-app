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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
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
