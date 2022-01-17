const categoryRouter = require('./categories');
const productRouter = require('./products');


const setupRoutes = (app) => {
    app.use('/api/products', productRouter);
    app.use('/api/categories', categoryRouter);
}

module.exports = setupRoutes;