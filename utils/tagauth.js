const { User, Tag } = require('../models');

const withAuth = async (req, res, next) => {

    // If the user is not logged in, redirect the request to the login route
        const userData = await User.findByPk(req.session.user_id, {
            attributes : { exclude: ['username', 'email', 'password', 'id'] },
            include : { model: Tag, attributes: ['id']}
        });

        const userTag = []
        for (let i=0; i < userData.tags.length; i++){
            // console.log(userData.tags[i].id);
            userTag.push(userData.tags[i].id)
        }
        // console.log(userTag)
        const tagid = Number(req.params.tagid)

        // console.log(userTag.includes(tagid));

        if (!userTag.includes(tagid)){
            res.redirect('/profile');
        } else {next();};

      
   
  };
  
  module.exports = withAuth;