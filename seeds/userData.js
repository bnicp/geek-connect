const { User } = require('../models');

const userData = [
    {
      username: "Sal",
      email: "sal@email.com",
      password: "password"
    },
    {
      username: "Lernantino",
      email: "lernantino@email.com",
      password: "password"
    },
    {
      username: "Amiko",
      email: "amiko2k20@email.com",
      password: "password"
    },
    {
      username: "heyimchris",
      email: "heyimchris@hotmail.com",
      password: "password"
    },
    {
      username: "blahblah",
      email: "blahblah@email.com",
      password: "password"
    },
    {
      username: "marty",
      email: "marty@email.com",
      password: "password"
    },
    {
      username: "Joesmith",
      email: "joesmith@email.com",
      password: "password"
    },
    {
      username: "zachg",
      email: "zachg@email.com",
      password: "password"
    },
    {
      username: "rolly",
      email: "rolly@email.com",
      password: "password"
    }
  ]

const seedTags = () => User.bulkCreate(userData);

module.exports = seedTags;