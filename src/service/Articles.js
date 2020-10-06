const { ArticlesModels, ProductsModel } = require("../models/AllModels");

class ArticleService {
  async saveArticle(body) {
    try {
      const newArticle = await ArticlesModels.create(body);
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
  async updateArticle(id, body) {
    try {
      const updateArticle = await ArticlesModels.update(body, { where: { id: id } });
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
      const orderBy = filter === "min" ? "ASC" : "DESC";
      const getOneArticle = await ArticlesModels.findAll({
        order: [["created_at", orderBy]],
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
