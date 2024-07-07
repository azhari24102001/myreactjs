const Categories = require('../../api/v1/categories/model');

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
}

const createAllCategories = async () => {
    const { name } = req.body;

    const check = await Categories
    const result = await Categories.create({ name });
    return result;
}


module.exports = { getAllCategories, createAllCategories} ;