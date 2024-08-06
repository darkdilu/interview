const { addUser } = require('../../../models/auth_models/user_add'); // Adjust the path as needed

exports.signup = (req, res) => {
  const { username, password, role } = req.body;
  
  if (!username || !password || !role) {
    return res.status(400).send({ message: 'Username, password, and role are required' });
  }

  addUser(username, password, role, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error adding user', error: err });
    }
    res.status(201).send({ message: 'User registered successfully' });
  });
};