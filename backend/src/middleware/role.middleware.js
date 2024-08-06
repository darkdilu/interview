const adminOnly = (req, res, next) => {
    if (req.userRole !== 'admin') {
      return res.status(403).send({ message: 'Require Admin Role' });
    }
    next();
  };
  
  const userOnly = (req, res, next) => {
    if (req.userRole !== 'user') {
      return res.status(403).send({ message: 'Require User Role' });
    }
    next();
  };
  
  module.exports = { adminOnly, userOnly };
  