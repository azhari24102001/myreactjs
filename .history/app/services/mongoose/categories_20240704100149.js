const Categories = require('../../api/v1/categories/model');
const { BadRequestError } = require('../../errors/')

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
}

const createAllCategories = async () => {
    const { name } = req.body;

    const check = await Categories.findOne({ name });

    if (check) throw new BadRequestError('category name duplicate');

    const result = await Categories.create({ name });
    return result;
}

const getOneACategoreies==

module.exports = { getAllCategories, createAllCategories} ;