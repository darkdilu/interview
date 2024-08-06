const Country = require('../../../models/admin_models/countries');

exports.getCountries = (req, res) => {
    Country.getAllCountries((err, results) => {
      if (err) {
        console.error('Error fetching countries:', err);
        return res.status(500).send('Server error');
      }
      res.json(results);
    });
  };