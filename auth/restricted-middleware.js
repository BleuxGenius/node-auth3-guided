const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const secret = process.env.JWT_SECRET || 'is it a secret, is it safe?';

  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {

    })
        if (err) {
          res.status(401).json({ message: 'Invalid Credentials' });
        } else {
          req.decodedToken = decodedToken;
          
          next();
        }
      } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
