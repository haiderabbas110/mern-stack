const requireAuth = (req, res, next) => {
    // Check if user is authenticated
    if (!req.session.user) {
      return res.redirect('/login');
    }
    next();
  };
  
  module.exports = requireAuth;