require("dotenv").config();
const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const product = require("./routers/product");
const article = require("./routers/article");

const app = Express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello " });
});

app.use("/product", product);
app.use("/article", article);

module.exports = { app };
