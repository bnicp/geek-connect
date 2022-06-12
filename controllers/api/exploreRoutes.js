const router = require('express').Router();
const { User, Category, Tag, UserTag } = require('../../models');
const withAuth = require('../../utils/auth.js');


// get all categories
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

// get all tags with category data
router.get('/:categoryid', async (req, res) => {
    const categoryid = req.params.categoryid;
    try{
      const tagData = await Tag.findAll({ 
        where: { category_id: categoryid },
        include: { model: Category}
    });

    const tags = tagData.map((tag) => tag.get({ plain: true }));

    res.render('test', {
        tags,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
    
})


module.exports = router;