require('dotenv').config();
const jwt = require('jsonwebtoken');

const calculateToken = (adminEmail = '', adminId = 0) => {
  return jwt.sign({ email: adminEmail, id: adminId }, process.env.PRIVATE_KEY);
};

const readAdminFromCookie = (req, res, next) => {
  const adminInfo = jwt.verify(req.cookies.monCookie, process.env.PRIVATE_KEY);
  req.adminId = adminInfo.id;
  next();
};

module.exports = {
  calculateToken,
  readAdminFromCookie,
};
