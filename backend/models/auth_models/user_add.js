const db = require('../index');
const bcrypt = require('bcrypt');

const addUser = (username, password, role, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    db.query(query, [username, hashedPassword, role], callback);
  });
};

module.exports = { addUser};
