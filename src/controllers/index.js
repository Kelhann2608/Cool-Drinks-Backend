const categoryRouter = require('./categories');
const productRouter = require('./products');
const authRouteur = require('./auth');
const adminRouter = require('./admins');

const setupRoutes = (app) => {
    app.use('/api/products', productRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/admins', adminRouter);
    app.use('/api/auth', authRouteur);
}

module.exports = setupRoutes;