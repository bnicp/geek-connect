const User = require('./User');
const Category = require('./Category');
const Tag = require('./Tag');
const UserTag = require('./UserTag');
const Post = require('./Post');
const Comment = require('./Comment');

Tag.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Tag, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

User.belongsToMany(Tag, {
  through: {
    model: UserTag,
    foreignKey: 'user_id'
  }
})

Tag.belongsToMany(User, {
  through: {
    model: UserTag,
    foreignKey: 'tag_id'
  }
})

User.hasMany(Post, {
  foreignKey: 'userId'
})

User.hasMany(Comment, {
  foreignKey: 'userId'
})

Post.hasMany(Comment, {
  foreignKey: 'postId'
})

Post.belongsTo(User, {
  foreignKey: 'userId'
})

Comment.belongsTo(User, {
  foreignKey: 'userId'
})

Tag.hasMany(Post, {
  foreignKey: 'tagId'
})

Post.belongsTo(Tag, {
  foreignKey: 'tagId'
})

Comment.hasOne(Post, {
  foreignKey: 'postId'
})


module.exports = { User, Category, Tag, UserTag, Post, Comment };
