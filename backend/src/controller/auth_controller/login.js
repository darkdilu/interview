const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserByUsername } = require('../../../models/auth_models/user_find');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: 'Username and password are required' });
  }

  findUserByUsername(username, (err, user) => {
    if (err) return res.status(500).send({ message: 'Error fetching user', error: err });
    if (!user) return res.status(404).send({ message: 'User not found' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send({ message: 'Error comparing passwords', error: err });
      if (!isMatch) return res.status(401).send({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).send({ token });
    });
  });
};