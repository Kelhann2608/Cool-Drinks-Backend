const connection = require('../db-config');

const getAll = () => {
    return connection
    .promise()
    .query('SELECT * FROM products')
    .then(([results]) => results);
};

const getById = (id) => {
    return connection
    .promise()
    .query('SELECT * FROM products where id_product = ?', [id])
    .then(([results]) => results[0]);
};

const getproductsByIdCategory = (idCategory) => {
    return connection
    .promise()
    .query('SELECT * FROM products where id_category = ?', [idCategory])
    .then(([results]) => results);
};

const create = (product) => {
    const {name, description, image, id_category} =product;
    return connection
    .promise()
    .query(
        'INSERT INTO products(name, description, image, id_category) VALUES (?,?,?,?)',
        [name, description, image, id_category]
    )
    .then(([result]) => result.inserId);
};

const deleteOne = (id) => {
    return connection
    .promise()
    .query(
        'DELETE FROM products WHERE id_product = ?',
        [id]
    )
    .then(([result]) => result.affectedRows === 1);
};

const update = (id_product, product) => {
    let sql = 'UPDATE products SET'
    let sqlValues = [];
    let oneValue = false;
    if (product.name){
        sql += 'name = ?'
        sqlValues.push(product.name);
        oneValue = true;
    }
    if (product.description){
        sql += oneValue ? ',description = ?' : 'description = ?';
        sqlValues.push(product.description);
        oneValue = true;
    }
    if (product.image){
        sql += oneValue ? ',image = ?' : 'image = ?';
        sqlValues.push(product.image);
        oneValue = true;
    }
    if (product.id_category){
        sql += oneValue ? ',id_category = ?' : 'id_category = ?';
        sqlValues.push(product.id_category);
    }
    sql += ' WHERE id_product = ?';
    sqlValues.push(id_product);
    return connection
    .promise()
    .query(
        sql, sqlValues
    )
    .then(([result]) => result.affectedRows === 1);
};

module.exports = { getAll, getById, getproductsByIdCategory, create, deleteOne, update };