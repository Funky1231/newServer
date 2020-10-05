const { ArticlesModels, ProductsModel } = require("../models/AllModels");

class ArticleService {
  async saveArticle(productId, articleName, description, content) {
    try {
      const article = {
        product_id: productId,
        article_name: articleName,
        description,
        content,
      };

      const newArticle = await ArticlesModels.create(article);
      return {
        data: newArticle,
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        err: e,
        data: null,
      };
    }
  }

  async findArticle(articleName) {
    try {
      const getOneArticle = await ArticlesModels.findOne({
        where: {
          article_name: articleName,
        },
        include: [
          {
            model: ProductsModel,
            required: true,
            attributes: ["product_name", "description", "implementation_cost"],
          },
        ],
      });
      return {
        data: getOneArticle,
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        err: e,
        data: null,
      };
    }
  }
  async updateArticle(id, articleName, description, content) {
    try {
      const article = {
        article_name: articleName,
        description,
        content,
      };

      const updateArticle = await ArticlesModels.update(
        { article_name: articleName, description: description, content: content },
        { where: { id: id } }
      );
      return {
        data: updateArticle,
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        err: e,
        data: null,
      };
    }
  }
  async deleteArticle(productId) {
    try {
      const deleteArticle = await ArticlesModels.destroy({
        where: {
          product_id: productId,
        },
      });
      return {
        data: deleteArticle,
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        err: e,
        data: null,
      };
    }
  }
  async findAllArticle(filter) {
    try {
      if (filter == "min") {
        filter = "ASC";
      }
      if (filter == "max") {
        filter = "DESC";
      }
      const getOneArticle = await ArticlesModels.findAll({
        order: [["created_at", `${filter}`]],
        include: [
          {
            model: ProductsModel,
            attributes: ["product_name", "description", "implementation_cost"],
            required: true,
          },
        ],
      });
      return {
        data: getOneArticle,
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        err: e,
        data: null,
      };
    }
  }
}

module.exports = { ArticleService };
