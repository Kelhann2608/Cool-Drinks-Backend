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


module.exports = categoryRouter;