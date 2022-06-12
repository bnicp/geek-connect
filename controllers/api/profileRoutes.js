const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth.js');


  router.get('/', withAuth, async (req, res) => { // withAuth removed
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });

      // res.render('profile')
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;