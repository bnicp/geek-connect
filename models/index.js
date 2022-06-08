const User = require('./User');
const Category = require('./Category');
const Tag = require('./Tag');
const UserTag = require('./UserTag')

// Tag.belongsTo(Category, {
//   foreignKey: 'category_id'
// });

// Category.hasMany(Tag, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE'
// });

// User.belongsToMany(Tag, {
//   through: {
//     model: UserTag,
//     foreignKey: 'user_id'
//   }
// })

// Tag.belongsToMany(User, {
//   through: {
//     model: UserTag,
//     foreignKey: 'tag_id'
//   }
// })

module.exports = { User, Category, Tag, UserTag };
