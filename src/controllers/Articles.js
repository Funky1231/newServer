const { ArticleService } = require("../service/Articles");

class ArticleController {
  async create(req, res) {
    const { productId, articleName, description, content } = req.body;
    const articletService = new ArticleService();
    const newArticle = await articletService.saveArticle({
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
    const articletService = new ArticleService();
    const deleteArticle = articletService.deleteArticle(id);

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
    const articletService = new ArticleService();
    const find = await articletService.findArticle(productName);
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
    const articletService = new ArticleService();
    const updateArticle = await articletService.updateArticle(id, {
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

    const articletService = new ArticleService();
    const find = await articletService.findAllArticle(filter);
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
