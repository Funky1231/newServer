require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    host: "172.18.0.2",
    dialect: "postgres",
  },
};
