const Categories = require('../../api/v1/categories/model');
const { BadRequestError, NotFoundError } = require('../../errors/')

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

const getOneCategories = async (req) => {
    const { id } = req.params;
    const result = await Categories.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id : ${id}`);
}

module.exports = { getAllCategories, createAllCategories, getOneCategories} ;