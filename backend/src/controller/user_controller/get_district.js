const District = require('../../../models/admin_models/district');
exports.getDistrict = (req, res) => {
    District.getAllDistrict((err, results) => {
      if (err) {
        console.error('Error fetching district:', err);
        return res.status(500).send('Server error');
      }
      res.json(results);
    });
  };