const Categories = require('../../api/v1/categories/model');
const { BadRequestError, NotFoundError } = require('../../errors/')

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
}

const createAllCategories = async (req) => {
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

    return result;
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { name } = req.body;
    
    const check = await Categories.findOne({
        name,
        _id: { $ne: id },
    });
    
    if (check) throw new BadRequestError('category name duplicate');

    const result = await Categories.findOneAndUpdate(
        { _id: id },
        { name },
        { new: true, run}
    )
}



module.exports = { getAllCategories, createAllCategories, getOneCategories} ;