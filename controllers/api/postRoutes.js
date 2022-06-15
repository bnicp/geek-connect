const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
 const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
              model: Comment,

          }
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


    router.post('/', withAuth, async (req, res) => {
        try {
          const newPost = await Post.create({
            ...req.body,
            userId: res.session.user_id,
          });
      
          console.log('newPost', newPost);
      
          res.status(200).json(newPost);
        } catch (err) {
          res.status(400).json(err);
        }
      });
    
router.get('/:id', withAuth, (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

      router.post('/comment', withAuth, async (req, res) => {
        try {
          const commentData = await Comment.create({
            ...req.body,
            postId: 1,
            userId: res.session.user_id,
          });
          res.json(commentData)
        } catch (err) {
          res.status(400).json(err);
        }
        });
    module.exports = router;