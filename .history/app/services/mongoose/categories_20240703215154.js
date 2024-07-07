const Categories = require('../../api/v1/categories/model');

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
}

const ge = async () => {
    const result = await Categories.find();

    return result;
}
const { name } = req.body;
const result = await Categories.create({ name });

module.exports = { getAllCategories} ;