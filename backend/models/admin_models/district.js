const db = require('../index');

const addDistrict = (name,  callback) => {
  const query = 'INSERT INTO districts (name) VALUES (?)';
  db.query(query, [name], callback);
};

const getAllDistrict = (callback) => {
  const query = 'SELECT * FROM districts';
  db.query(query, callback);
};

module.exports = { addDistrict,getAllDistrict };