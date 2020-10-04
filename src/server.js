const http = require("http");
const { app } = require("./app");
const { sequelize } = require("./db/connectDB");

const server = http.createServer(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    server.listen(process.env.PORT, () => {
      console.log("start", process.env.PORT);
    });
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
})();
