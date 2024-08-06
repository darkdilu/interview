const City = require('../../../models/admin_models/city');

exports.addCity = (req, res) => {
  const { name} = req.body;
 
  City.addCity(name, (err, results) => {
    if (err) {
      console.error('Error adding city:', err);
      return res.status(500).send('Server error');
    }
    res.send(results);  
  });
};

exports.getAllCity = (req, res) => {
  City.getAllCity((err, results) => {
    if (err) {
      console.error('Error fetching cities:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
};
