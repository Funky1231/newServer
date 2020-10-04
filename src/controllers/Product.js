const { ProductService } = require("../service/Product");

class ProductController {
  async create(req, res) {
    const { productName, description, implementationCost } = req.body;
    const productService = new ProductService();
    const newProduct = await productService.saveProduct(
      productName,
      description,
      implementationCost
    );

    if (newProduct.data === null) {
      return res.status(400).json("Bad request");
    }

    if (newProduct.err) {
      return res.status(500);
    }
    res.status(201).json({ message: "ok" });
  }

  async deleteOne(req, res) {
    const id = req.params.id;
    const productService = new ProductService();
    const deleteOne = await productService.deleteProduct(id);

    if (deleteOne.data === null) {
      return res.status(404).json({ message: "Not found" });
    }
    if (deleteOne.err) {
      return res.status(500);
    }
    res.json({ message: "ok" });
  }

  async findOne(req, res) {
    const { productName } = req.params;

    const productService = new ProductService();
    const find = await productService.findProduct(productName);

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
    const { productName, description, implementationCost } = req.body;
    const productService = new ProductService();
    const updateProduct = await productService.updateProduct(
      id,
      productName,
      description,
      implementationCost
    );

    if (updateProduct.data === null) {
      return res.status(400).json("Bad request");
    }

    if (updateProduct.err) {
      return res.status(500);
    }
    res.status(201).json({ message: "ok" });
  }

  async findAll(req, res) {
    let filter = req.params.filter;

    if (filter == "min") {
      filter = "ASC";
    }
    if (filter == "max") {
      filter = "DESC";
    }

    const productService = new ProductService();
    const find = await productService.findAllProduct(filter);

    if (find.data === null) {
      return res.status(404).json({ message: "Not found" });
    }
    if (find.err) {
      return res.status(500);
    }
    res.json(find);
  }
}

module.exports = { ProductController };
