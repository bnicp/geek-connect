const router = require('express').Router();
// const { User } = require('../../models');
const homeAuth = require('../../utils/homeauth');

router.get('/', homeAuth, async (req, res) => {
  res.render('home', {
    logged_in: req.session.logged_in
  });
});
module.exports = router;

router.get('/signup', async (req, res) => {
    res.render('signup');
  });
module.exports = router;