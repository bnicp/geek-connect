const router = require('express').Router();
const { User, Category, Tag, UserTag } = require('../../models');
const withAuth = require('../../utils/auth.js');

router.get('/', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((category) => category.get({ plain: true }));
    console.log(categories)
    res.render('test', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;