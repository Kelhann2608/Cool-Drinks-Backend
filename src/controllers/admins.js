const adminRouter = require('express').Router();
const Admin = require('../models/admin');
const { readAdminFromCookie } = require('../helpers/admins');

require('dotenv').config();
const jwt = require('jsonwebtoken');

// mes routes GET, POST, DELETE
adminRouter.get('/', async (req, res) => {
  const admins = await Admin.getAll();
  res.status(200).send(admins);
});
adminRouter.get('/:id', async (req, res) => {
  const admin = await Admin.getById(req.params.id);
  admin ? res.status(200).send(admin) : res.sendStatus(404);
});

adminRouter.post('/test', (req, res) => {
  const password = req.body.password;

  Admin.cryptePassword(password).then((hashedPassword) =>
    res.status(200).send(hashedPassword)
  );
});

adminRouter.put('/', readAdminFromCookie, (req, res) => {
  res.status(200).json(req.adminId);
});

adminRouter.delete('/:id', async (req, res) => {
  const adminDeleted = await Admin.deleteOne(req.params.id);
  adminDeleted ? res.sendStatus(204) : res.sendStatus(404);
});

adminRouter.post('/', (req, res) => {
  const { lastname, firstname, email, password } = req.body;

  const validationErrors = Admin.validate(req.body);
  console.log(req.adminId);
  if (validationErrors) {
    res.status(422).json(validationErrors.details);
  } else {
    Admin.cryptePassword(password).then((hashedPassword) =>
      Admin.create(lastname, firstname, email, hashedPassword)
        .then((result) => result[0].insertId)
        .then((id) => res.status(201).json({ id, ...req.body }))
        .catch((error) =>
          res.status(500).send('Impossible de créer cet administrateur')
        )
    );
  }
});

module.exports = adminRouter;
