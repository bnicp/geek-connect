const { Tag } = require('../models');

const tagData = [
    {
        tag_name:"Jedi",
        category_id:1,
        filename: "/images/SW_factions/jedi.jpg"
    },
    {
        tag_name:"Sith",
        category_id:1,
        filename: "/images/SW_factions/sith.svg"
    },
    {
        tag_name:"Wookiee",
        category_id:1,
        filename: "/images/SW_factions/wookie.png"
    },
    {
        tag_name:"Ewok",
        category_id:1,
        filename: "/images/SW_factions/ewok.jpg"
    },
    {
        tag_name:"Drone",
        category_id:1,
        filename: "/images/SW_factions/droid.jpg"
    },
    {
        tag_name:"House Stark",
        category_id:2,
        filename: "/images/GoT_sigils/stark.png"
    },
    {
        tag_name:"House Lannister",
        category_id:2,
        filename: "/images/GoT_sigils/lannister.png"
    },
    {
        tag_name:"House Targaryen",
        category_id:2,
        filename: "/images/GoT_sigils/targaryen.png"
    },
    {
        tag_name:"House Greyjoy",
        category_id:2,
        filename: "/images/GoT_sigils/greyjoy.png"
    },
    // {
    //     tag_name:"House Dorne",
    //     category_id:2,
    //     filename: "/images/GoT_sigils/martell.png"
    // },
    {
        tag_name:"House Tyrell",
        category_id:2,
        filename: "/images/GoT_sigils/tyrell.png"
    },
    {
        tag_name:"House Baratheon",
        category_id:2,
        filename: "/images/GoT_sigils/baratheon.png"
    },
    {
        tag_name:"Gryffindor",
        category_id:3,
        filename: "/images/hp_crests/gryffindor.png"
    },
    {
        tag_name:"Hufflepuff",
        category_id:3,
        filename: "/images/hp_crests/hufflepuff.png"
    },
    {
        tag_name:"Ravenclaw",
        category_id:3,
        filename: "/images/hp_crests/ravenclaw.png"
    },
    {
        tag_name:"Slytherin",
        category_id:3,
        filename: "/images/hp_crests/slutherin.png"
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;