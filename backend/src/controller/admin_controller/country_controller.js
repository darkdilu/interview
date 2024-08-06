const Country = require('../../../models/admin_models/countries');

exports.addCountry = (req, res) => {
  const { name } = req.body;

  Country.addCountry(name, (err, results) => {
    if (err) {
      console.error('Error adding country:', err);
      return res.status(500).send('Server error');
    }
    res.send(results);
  });
};
exports.getCountries = (req, res) => {
  Country.getAllCountries((err, results) => {
    if (err) {
      console.error('Error fetching countries:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
};