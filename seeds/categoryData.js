const { Category } = require('../models/');

const categoryData = [
    {category_name:"Star Wars"},
    {category_name:"Game of Thrones"},
    {category_name:"Harry Potter"}
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;