const State = require('../../../models/admin_models/state');
exports.getState = (req, res) => {
    State.getAllState((err, results) => {
      if (err) {
        console.error('Error fetching states:', err);
        return res.status(500).send('Server error');
      }
      res.json(results);
    });
  };
  