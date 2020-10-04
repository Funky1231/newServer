const { ProductsModel, ArticlesModels } = require("../models/AllModels");

class ProductService {
  async saveProduct(productName, description, implementationCost) {
    try {
      const product = {
        product_name: productName,
        description,
        implementation_cost: implementationCost,
      };

      const newProduct = await ProductsModel.create(product);
      return {
        data: newProduct,
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

  async findProduct(productName) {
    try {
      const getOneProduct = await ProductsModel.findAll({
        where: {
          product_name: productName,
        },
        include: [
          {
            model: ArticlesModels,
            required: true,
            attributes: ["article_name", "description", "content"],
          },
        ],
      });

      return {
        data: getOneProduct,
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
  async findAllProduct(filter) {
    try {
      const findAll = await ProductsModel.findAll({
        order: [["implementation_cost", `${filter}`]],
        include: [
          {
            model: ArticlesModels,
            required: true,
            attributes: ["article_name", "description", "content"],
          },
        ],
      });

      return {
        data: findAll,
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
  async updateProduct(id, productName, description, implementationCost) {
    try {
      const updateProduct = await ProductsModel.update(
        {
          product_name: productName,
          description: description,
          implementation_cost: implementationCost,
        },
        { where: { id: id } }
      );
      return {
        data: updateProduct,
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
  async deleteProduct(id) {
    try {
      const deleteProduct = await ProductsModel.destroy({ where: { id: id } });
      return {
        data: deleteProduct,
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

module.exports = { ProductService };
