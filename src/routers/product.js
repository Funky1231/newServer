const { Router } = require("express");
const { ProductController } = require("../controllers/Product");

const product = Router();

const productController = new ProductController();

product.get("/find/:productName", productController.findOne.bind(productController));
product.get("/find-all/:filter", productController.findAll.bind(productController));
product.post("/create", productController.create.bind(productController));
product.put("/update/:id", productController.update.bind(productController));
product.delete("/delete/:id", productController.deleteOne.bind(productController));

module.exports = product;
