const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/connectDB");

class ProductsModel extends Model {}

ProductsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    implementation_cost: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "products",
  }
);

class ArticlesModels extends Model {}

ArticlesModels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    article_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "articles",
  }
);

ProductsModel.hasMany(ArticlesModels);
ArticlesModels.belongsTo(ProductsModel);

module.exports = { ProductsModel, ArticlesModels };
