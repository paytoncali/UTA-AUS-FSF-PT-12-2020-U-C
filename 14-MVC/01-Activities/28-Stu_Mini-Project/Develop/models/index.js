const User = require('./User');
<<<<<<< HEAD

module.exports = { User };
=======
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a
