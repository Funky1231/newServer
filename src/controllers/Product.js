const { ProductService } = require("../service/Product");

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }
  async create(req, res) {
    const { productName, description, implementationCost } = req.body;
    const newProduct = await this.productService.saveProduct({
      product_name: productName,
      description,
      implementation_cost: implementationCost,
    });

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
    const deleteOne = await this.productService.deleteProduct(id);

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
    const find = await this.productService.findProduct(productName);

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
    const updateProduct = await this.productService.updateProduct(id, {
      product_name: productName,
      description: description,
      implementation_cost: implementationCost,
    });

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

    const find = await this.productService.findAllProduct(filter);

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
