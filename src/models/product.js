const connection = require('../db-config');

const getAll = () => {
    return connection
    .promise()
    .query('SELECT * FROM product')
    .then(([results]) => results);
};

const getById = (id) => {
    return connection
    .promise()
    .query('SELECT * FROM product where id= ?', [id])
    .then(([results]) => results[0]);
};

module.exports = { getAll, getById };