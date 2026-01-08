const Product = require("../models/product");

/*
    name: getAddProducts
    description: controller for add-products page
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.getAddProducts = (req, res, next) => {
  res.render("admin/edit-products", {
    pageTitle: "Add-Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCss: true,
    editing: false,
  });
};

/*
    name: postNewProducts
    description: controller to handle new product submission
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.postNewProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

/*
   name: getEditProducts
   description: controller for edit-products page
   arguments: req, res, next
   author: Dhananjay Bhatkar
*/
exports.getEditProducts = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-products", {
      pageTitle: "Edit-Products",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  // to be implemented
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedData = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDescription
  );
  updatedData.save();
  res.redirect("/add-product-list");
};

/*
    name: getProducts
    description: controller for admin products list page
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/add-product-list", {
      data: products,
      pageTitle: "Admin Products",
      path: "/admin/add-product-list",
    });
  });
};
