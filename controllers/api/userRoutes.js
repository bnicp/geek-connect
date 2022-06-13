const router = require('express').Router();
const { User, Category, Tag, UserTag } = require('../../models');

// get all users
router.get('/', async (req, res) => {
  try {
    // const tagdata = Tag.hasOne(Category, { as: 'category'});
    const userData = await User.findAll({
      attributes: ['id', 'username', 'email'],
      include: [
        { 
          model: Tag, attributes: ['tag_name', 'id'], include: [{model: Category}]
        },
      ]
    
    });
  //   res.render('profile');
  // } catch (err) {
  //   res.status(500).json(err);
  // }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// router.get('/', async (req, res) => {
//   // find all products
//   // be sure to include its associated Category and Tag data
//   try {
//     const productData = await Product.findAll({
//       include: [
//         { 
//           model: UserTag
//         } 
//         // { 
//         //   model: Tag, attributes: ['tag_name', 'id']
//         // }
//       ]}
//     );
//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// takes user to create account
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // res.status(200).json(userData);
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/usertag', async (req, res) => {
  try { 
    const user_tag = UserTag.create({
      ...req.body,
      user_id: req.session.user_id, 
    });
    res.status(200).json(user_tag)
  } catch (err) {
    res.status(400).json(err);
  }
});

// login route into site
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// to be able to logout of website
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
