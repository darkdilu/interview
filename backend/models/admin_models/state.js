const db = require('../index');

const addState = (name,  callback) => {
  const query = 'INSERT INTO states (name) VALUES (?)';
  db.query(query, [name], callback);
};
const getAllState = (callback) => {
  const query = 'SELECT * FROM states';
  db.query(query, callback);
};
module.exports = { addState ,getAllState};