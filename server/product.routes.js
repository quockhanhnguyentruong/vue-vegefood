module.exports = app => {
  const item = require("./product.controller.js");

  var router = require("express").Router();

  router.get("/product-list", item.getAll);

  router.post("/client", item.createAccount);

  app.use("/api", router);
};
