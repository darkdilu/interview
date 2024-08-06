const db = require('../index');

const addCity = (name,callback) => {
  const query = 'INSERT INTO cities (name) VALUES (?)';
  db.query(query, [name], callback);
};

const getAllCity = (callback) => {
  const query = 'SELECT * FROM cities';
  db.query(query, callback);
};

module.exports = { addCity,getAllCity };