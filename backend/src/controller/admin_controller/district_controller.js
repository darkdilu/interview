const District = require('../../../models/admin_models/district');

exports.addDistrict = (req, res) => {
  const { name } = req.body;
  District.addDistrict(name,(err, results) => {
    if (err) {
      console.error('Error adding district:', err);
      return res.status(500).send('Server error');
    }
    res.send(results);
  });
};
exports.getDistrict = (req, res) => {
  District.getAllDistrict((err, results) => {
    if (err) {
      console.error('Error fetching district:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
};