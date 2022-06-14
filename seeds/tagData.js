const { Tag } = require('../models');

const tagData = [
    {
        tag_name:"Jedi",
        category_id:1
    },
    {
        tag_name:"Sith",
        category_id:1
    },
    {
        tag_name:"Wookiee",
        img_filename_model_update
        category_id:1,
        filename: "/images/SW_factions/wookie.png"
    },
    {
        tag_name:"Ewok",
        category_id:1
    },
    {
        tag_name:"Drone",
        category_id:1
    },
    {
        tag_name:"House Stark",
        category_id:2
    },
    {
        tag_name:"House Lannister",
        category_id:2
    },
    {
        tag_name:"House Targaryen",
        category_id:2
    },
    {
        tag_name:"House Greyjoy",
        category_id:2
    },
    {
        tag_name:"House Dorne",
        category_id:2
    },
    {
        tag_name:"House Tyrell",
        category_id:2
    },
    {
        tag_name:"House Baratheon",
        category_id:2
    },
    {
        tag_name:"Gryffindor",
        category_id:3
    },
    {
        tag_name:"Hufflepuff",
        category_id:3
    },
    {
        tag_name:"Ravenclaw",
        category_id:3
    },
    {
        tag_name:"Slytherin",
        category_id:3
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;