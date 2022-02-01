const productRouter = require('express').Router();
const Product = require('../models/product');

// mes routes GET, POST, DELETE
productRouter.get('/', async (req, res) => {
    const products = await Product.getAll();
    res.status(200).send(products);
});

productRouter.get('/:id', async(req, res) => {
    const product = await Product.getById(req.params.id);
    product ? res.status(200).send(product) : res.sendStatus(404);
});

productRouter.post('/', async (req, res) => {
    const idProduct = await Product.create(req.body);
    res.status(201).json({id:idProduct, ...req.body});
});

productRouter.delete('/:id', async (req, res) => {
    const productDeleted = await Product.deleteOne(req.params.id);
    productDeleted ? res.sendStatus(204) : res.sendStatus(404);
});

productRouter.put('/:id', async (req, res) => {
    const productUpdated = await Product.update(req.params.id, req.body);
    productUpdated ? res.sendStatus(204) : res.sendStatus(404);
});

module.exports = productRouter;