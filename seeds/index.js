const seedCategories = require('./categoryData');
const seedUsers = require('./userData');
const seedTags = require('./tagData');
const seedUserTags = require('./userTagData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedUserTags();
  console.log('\n----- User TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();