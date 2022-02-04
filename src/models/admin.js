const connection = require('../db-config');
const argon = require('argon2');
const Joi = require('joi');

const hashOptions = {
  type: argon.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// Validation des données
const validate = (data) => {
  return Joi.object({
    lastname: Joi.string().max(100).required(),
    firstname: Joi.string().max(100).required(),
    email: Joi.string().max(100).required(),
    password: Joi.string().min(7).max(20).required(),
  }).validate(data, { abortEarly: false }).error;
};

// Cryptage du mot de passe
const cryptePassword = (password) => {
  return argon.hash(password, hashOptions);
};

const verifyPassword = (password, cryptedPassword) => {
  return argon.verify(cryptedPassword, password, hashOptions);
};

const getAll = () => {
  return connection
    .promise()
    .query('SELECT * FROM admins')
    .then(([results]) => results);
};

const getById = (id) => {
  return connection
    .promise()
    .query('SELECT * FROM admins where id_admin = ?', [id])
    .then(([results]) => results[0]);
};

const create = (lastname, firstname, email, password) => {
  return connection
    .promise()
    .query(
      'INSERT INTO admins(lastname, firstname, email, password) VALUES (?,?,?,?)',
      [lastname, firstname, email, password]
    );
};

const deleteOne = (id) => {
  return connection
    .promise()
    .query('DELETE FROM admins WHERE id_admin = ?', [id])
    .then(([result]) => result.affectedRows === 1);
};

const getByEmail = (email) => {
  return connection
    .promise()
    .query('SELECT * FROM admins WHERE email = ?', [email]);
};

module.exports = {
  getAll,
  getById,
  cryptePassword,
  validate,
  verifyPassword,
  create,
  deleteOne,
  getByEmail,
};
