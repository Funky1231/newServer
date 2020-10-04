const { Router } = require("express");
const { ProductController } = require("../controllers/Product");

const product = Router();

const productController = new ProductController();

product.get("/find/:productName", productController.findOne);
product.get("/find-all/:filter", productController.findAll);
product.post("/create", productController.create);
product.put("/update/:id", productController.update);
product.delete("/delete/:id", productController.deleteOne);

module.exports = product;
