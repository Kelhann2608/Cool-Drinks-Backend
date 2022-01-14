const productRouter = require('express').Router();
const Product = require('../models/product');

productRouter.get('/', async (req, res) => {
    const products = await Product.getAll();
    res.status(200).send(products);
});

productRouter.get('/:id', async(req, res) => {
    const product = await Product.getById(req.params.id);
    product ? res.status(200).send(product) : res.sendStatus(404);
});




module.exports = productRouter;