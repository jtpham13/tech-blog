const User = require('./User');
const Post = require('./Post');
const Comments = require('./comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comments.belongsTo(User,{
 foreignKey: 'user_id'
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.hasMany(Comments,{
 foreignKey: 'post_id'
})

module.exports = { User, Comments, Post };
