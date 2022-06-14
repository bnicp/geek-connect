const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      console.log('blogs', blogs);
    //   res.render('homepage', {
    //     blogs,
    //     logged_in: req.session.logged_in,
    //   });
    res.json(blogs)
    } catch (err) {
      res.status(500).json(err);
    }
  });
// router.get('/post/:id', async (req, res) => {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//         {
//           model: Comment,
//           include: {
//             model: User,
//             attributes: ['username'],
//           },
//         },
//       ],
//     });
  
//     const blog = postData.get({ plain: true });

//     res.render('profile', {
//         ...blog,
//         logged_in: true,
//       });
//     });


    router.post('/', async (req, res) => {
        try {
          const newPost = await Post.create({
            ...req.body,
            userId: 13,
          });
      
          console.log('newPost', newPost);
      
          res.status(200).json(newPost);
        } catch (err) {
          res.status(400).json(err);
        }
      });
    
    module.exports = router;