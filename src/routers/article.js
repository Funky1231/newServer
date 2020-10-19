const { Router } = require("express");
const { ArticleController } = require("../controllers/Articles");

const article = Router();

const articleController = new ArticleController();

article.get("/findAll/:filter", articleController.findAll.bind(articleController));
article.get("/find/:articleName", articleController.findOne.bind(articleController));
article.post("/create", articleController.create.bind(articleController));
article.put("/update/:id", articleController.update.bind(articleController));
article.delete("/delete/:id", articleController.deleteOne.bind(articleController));

module.exports = article;
