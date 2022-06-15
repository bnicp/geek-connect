const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
 const withAuth = require('../../utils/auth');


// GETs posts (no comments) for specific tag
router.get('/tag=:id', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        where: { tagId: req.params.id },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          // {
          //     model: Comment,
          //     include: {model: User, attributes: ['username']}

          // }
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      // console.log('blogs', blogs);
    //   res.render('homepage', {
    //     blogs,
    //     logged_in: req.session.logged_in,
    //   });
    res.json(blogs)
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POSTs post in specific tag
    router.post('/:id', async (req, res) => {
        try {
          
          const newPost = await Post.create({
            ...req.body,
            tagId: Number(req.params.id),
            userId: 10,
          });
      
          // console.log('newPost', newPost);
      
          res.status(200).json(newPost);
        } catch (err) {
          res.status(400).json(err);
        }
      });

// GET specific post in specifc tag
router.get('/tag=:tagid/:id', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findByPk(req.params.id, {
      where: [{tagId: req.params.tagid}],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
            model: Comment,
            include: {model: User, attributes: ['username']}

        }
      ],
    });

  res.json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
});


      router.post('/comment/:id', async (req, res) => {
        try {
          const postIdparam = Number(req.params.id)
          const commentData = await Comment.create({
            // where: {postId: req.params.id },
            ...req.body,
            postId: postIdparam,
            userId: 10,
          });
          res.json(commentData)
        } catch (err) {
          res.status(400).json(err);
        }
        });
    module.exports = router;