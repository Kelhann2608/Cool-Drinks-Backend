const authRouteur = require('express').Router();
const { getByEmail, verifyPassword } = require('../models/admin');
const { calculateToken } = require('../helpers/admins');

// mes routes GET, POST
authRouteur.get('/coucou', (req, res) => {
  res.status(200).send('hibou');
});

authRouteur.post('/login', (req, res) => {
  const { email, password } = req.body;

  getByEmail(email)
    .then(([admins]) => admins[0])
    .then((admin) => {
      if (!admin) {
        res.status(422).send('email incorrect');
      } else {
        verifyPassword(password, admin.password).then((passwordOk) => {
          if (passwordOk) {
            const token = calculateToken(email, admin.id_admin);
            res.cookie('monCookie', token);
            res.send();
          }
        });
      }
    });
});

module.exports = authRouteur;
