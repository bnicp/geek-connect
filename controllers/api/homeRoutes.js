const router = require('express').Router();
// const { User } = require('../../models');

router.get('/', async (req, res) => {
  res.render('home');
});
module.exports = router;

router.get('/signup', async (req, res) => {
    res.render('signup');
  });
module.exports = router;