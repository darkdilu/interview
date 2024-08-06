const State = require('../../../models/admin_models/state');

exports.addState = (req, res) => {
  const { name } = req.body;
  State.addState(name,  (err, results) => {
    if (err) {
      console.error('Error adding state:', err);
      return res.status(500).send('Server error');
    }
    res.send(results);
  });
};
exports.getState = (req, res) => {
  State.getAllState((err, results) => {
    if (err) {
      console.error('Error fetching states:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
};
