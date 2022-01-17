const connection = require('../db-config');

const getAll = () => {
  return connection
    .promise()
    .query('SELECT * FROM categories')
    .then(([results]) => results);
};

const getById = (id) => {
  return connection
    .promise()
    .query('SELECT * FROM categories where id_category = ?', [id])
    .then(([results]) => results[0]);
};

const create = (category) => {
  return connection
    .promise()
    .query('INSERT INTO categories (name) VALUES (?)', [category.name])
    .then(([result]) => result.inserId);
};

const deleteOne = (id) => {
  return connection
    .promise()
    .query('DELETE FROM categories WHERE id_category = ?', [id])
    .then(([result]) => result.affectedRows === 1);
};

const update = (id, category) => {
  let sql = 'UPDATE categories SET';
  let sqlValues = [];
  let oneValue = false;
  if (category.name) {
    sql += 'name = ?';
    sqlValues.push(category.name);
    oneValue = true;
  }
  sql += 'WHERE id_category = ?';
  sqlValues.push(id);
  return connection
    .promise()
    .query(sql, sqlValues)
    .then(([result]) => result.affectedRows === 1);
};

module.exports = {
  getAll,
  getById,
  create,
  deleteOne,
  update,
};
