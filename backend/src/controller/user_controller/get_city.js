const City = require('../../../models/admin_models/city');

exports.getAllCity = (req, res) => {
    City.getAllCity((err, results) => {
      if (err) {
        console.error('Error fetching cities:', err);
        return res.status(500).send('Server error');
      }
      res.json(results);
    });
  };
  