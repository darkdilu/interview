const db=require("../index")
const addCountry = (name, callback) => {
    const query = 'INSERT INTO countries (name) VALUES (?)';
    db.query(query, [name], callback);
  };
  const getAllCountries = (callback) => {
    const query = 'SELECT * FROM countries';
    db.query(query, callback);
  };

  
  module.exports = { addCountry,getAllCountries };