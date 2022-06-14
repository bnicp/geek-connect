const router = require('express').Router();
const { filter } = require('lodash');
const { User, Tag, UserTag, Category } = require('../../models');
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


  router.get('/test', async (req, res) => {
    try {
      const userData = await User.findByPk(10, {
        attributes: { exclude: ['password'] },
        include: [{ model: Tag, attributes: ['tag_name', 'id'], include: [{model: Category}] }],
      });

      const tagData = []

      for (let i=0; i < userData.tags.length; i++) {
        const usertag = await Tag.findAll({
          where: { id: userData.tags[i].id },
          include: [{ model: User, attributes: ['username']}]
        })
        const userblah= usertag.map((user) => user.get({ plain: true}));
        // const filterUsers = [];
        for (let i=0; i < userblah[0].users.length; i++) {
          if (userblah[0].users[i].username !== userData.username) {
            tagData.push(userblah[0].users[i])
          }
        }
        
        // tagData.push(filterUsers);
      }

      // const usertag = await Tag.findAll({
      //   where: { id: userData.tags[0].id },
      //   include: [{ model: User, attributes: ['username']}]
      // })
      
      // const userblah= usertag.map((user) => user.get({ plain: true}));
      // res.json(userblah[0].users[1].username)
      // console.log(userblah[0].users.length)

      // res.json(tagData)
      // console.log(userData)
      // const tagData = await Tag.findAll({
      //   where: { id: userData.tags[0].id },
      //   include: [{ model: User, attributes: ['username'] }],
      // })

    

      // const users = userData.map((user) => user.get({ plain: true }));
      const users = userData.get({ plain: true });
      // const tags = tagData.get({ plain: true });
      // const tags = tagData.map((tag) => tag.get({ plain: true }));

      // console.log(users)

      // res.json(tagData);
      // const resi = await res.json(tagData);
      // console.log(user.tags[0].id)
      // console.log(resi)
      const obj = {};
      obj['user'] = users;
      obj['sameTags'] = tagData;
      // res.json(obj)

      res.render('profile', {
        ...obj, 
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
    }
  )
module.exports = router;