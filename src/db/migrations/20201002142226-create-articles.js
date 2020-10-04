module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "articles",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        product_id: {
          type: Sequelize.INTEGER,

          references: {
            model: "products",
            key: "id",
          },
        },
        article_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("articles");
  },
};
