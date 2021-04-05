const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User } = require('../models');

const userData = require('./userData.json');
=======
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

<<<<<<< HEAD
  await User.bulkCreate(userData, {
=======
  const users = await User.bulkCreate(userData, {
>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
=======
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a
  process.exit(0);
};

seedDatabase();
