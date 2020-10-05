const { Router } = require("express");
const { ArticleController } = require("../controllers/Articles");

const article = Router();

const articleController = new ArticleController();

article.get("/findAll/:filter", articleController.findAll);
article.get("/find/:articleName", articleController.findOne);
article.post("/create", articleController.create);
article.put("/update/:id", articleController.update);
article.delete("/delete/:id", articleController.deleteOne);

module.exports = article;
