const Categories = require('./model');
const { getAllCategories, createAllCategories, getOneCategories, updateCategories } = require('../../../services/mongoose/categories');

const create = async (req, res, next) => {
    try {
        const result = await createAllCategories(req);
        
        res.status(201).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories();
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};


const find = async (req, res, next) => {
    try {
        const result = await getOneCategories(req);
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req);
    } catch (err) {
        next(err);
    }
};


const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({
                message: "Data not found",
            });
        }
        res.status(200).json({
            data: result,
            message: "Data deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};


module.exports = {
    index,
    find,
    update,
    destroy,
    create,
};