const { ArticleService } = require("../service/Articles");

class ArticleController {
  constructor() {
    this.articleService = new ArticleService();
    console.log(this.articleService);
  }
  async create(req, res) {
    const { productId, articleName, description, content } = req.body;
    const newArticle = await this.articleService.saveArticle({
      product_id: productId,
      article_name: articleName,
      description,
      content,
    });

    if (newArticle.data === null) {
      return res.status(400).json("Bad request");
    }
    if (newArticle.err) {
      return res.status(500);
    }
    res.status(201).json({ message: "ok" });
  }

  async deleteOne(req, res) {
    const id = req.params.id;
    const deleteArticle = this.articleService.deleteArticle(id);
    if (deleteArticle.data === null) {
      return res.status(404).json({ message: "Not found" });
    }

    if (deleteArticle.err) {
      return res.status(500);
    }
    res.json({ message: "ok" });
  }

  async findOne(req, res) {
    const { productName } = req.param;
    const find = await this.articleService.findArticle(productName);
    if (find.data === null) {
      return res.status(404).json({ message: "Not found" });
    }
    if (find.err) {
      return res.status(500);
    }
    res.json(find);
  }

  async update(req, res) {
    const { id } = req.params;
    const { articleName, description, content } = req.body;
    const updateArticle = await this.articleService.updateArticle(id, {
      article_name: articleName,
      description,
      content,
    });
    if (updateArticle.data === null) {
      return res.status(400).json("Bad request");
    }
    if (updateArticle.err) {
      return res.status(500);
    }
    res.status(201).json({ message: "ok" });
  }

  async findAll(req, res) {
    let filter = req.params.filter;
    const find = await this.articleService.findAllArticle(filter);
    if (find.data === null) {
      return res.status(404).json({ message: "Not found" });
    }
    if (find.err) {
      return res.status(500);
    }
    res.json(find);
  }
}

module.exports = { ArticleController };
