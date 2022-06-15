const router = require('express').Router();
const { filter } = require('lodash');
const { User, Tag, UserTag, Category } = require('../../models');
const withAuth = require('../../utils/auth.js');


  router.get('/test', withAuth, async (req, res) => { // withAuth removed
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


  router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Tag, attributes: ['tag_name', 'id'], 
            include: [{model: Category, attributes: ['category_name']}] 
        }],
      });

      const tagData = []

      for (let i=0; i < userData.tags.length; i++) {
        const usertagData = await Tag.findAll({
          where: { id: userData.tags[i].id },
          include: [
            { model: Category, attributes: ['category_name']}, 
            { model: User, attributes: ['username']}]
        })
        const userblah= usertagData.map((user) => user.get({ plain: true}));
        const filterUsers = [];
        for (let i=0; i < userblah[0].users.length; i++) {
          if (userblah[0].users[i].username !== userData.username) {
            filterUsers.push(userblah[0].users[i])
          }
        }
        userblah[0].users = filterUsers
        tagData.push(userblah);
      }

      // const users = userData.map((user) => user.get({ plain: true }));
      const users = userData.get({ plain: true });
      // const tags = tagData.get({ plain: true });
      // const tags = tagData.map((tag) => tag.get({ plain: true }));
    
      const obj = {};
      obj['user'] = users;
      obj['sameTags'] = tagData;
      // res.json(obj)

      res.render('profile', {
        ...obj, 
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
    }
  )


 


// router.post('/', withAuth, (req, res) => {
//   try {
//     const commentData = await Comment.create({
//       ...req.body,
//       userId: 13

//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
//   });

  router.get('/tagauth', async (req, res) => {
    try{
      const userData = await User.findByPk(10, {
        attributes : { exclude: ['username', 'email', 'password', 'id'] },
        include : { model: Tag, attributes: ['id']}
    });
    res.json(userData)
    }catch (err) {}
  })

module.exports = router;