const categoryRouter = require('express').Router();
const Category = require('../models/category');
const Product = require('../models/product');

categoryRouter.get('/', async (req, res) => {
  const categories = await Category.getAll();
  res.status(200).send(categories);
});

categoryRouter.get('/:id', async (req, res) => {
  const category = await Category.getById(req.params.id);
  category ? res.status(200).send(category) : res.sendStatus(404);
});

categoryRouter.post('/', async (req, res) => {
  const idCategory = await Category.create(req.body);
  res.status(201).json({ id: idCategory, ...req.body });
});

categoryRouter.delete('/:id', async (req, res) => {
  const categoryDeleted = await Category.deleteOne(req.params.id);
  categoryDeleted ? res.sendStatus(204) : res.sendStatus(404);
});

categoryRouter.get('/:id/products', async (req, res) => {
  const products = await Product.getproductsByIdCategory(req.params.id);
  products ? res.status(200).send(products) : res.sendStatus(404);
});

categoryRouter.put('/:id', async (req, res) => {
  const categoryUpdated = await Category.update(req.params.id, req.body);
  categoryUpdated ? res.sendStatus(204) : res.sendStatus(404);
});

module.exports = categoryRouter;
