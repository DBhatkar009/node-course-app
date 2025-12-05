exports.getError404 = (req, res, next) => {
  res.status(404).render("Error404", { pageTitle: "Page Not Found" });
};
