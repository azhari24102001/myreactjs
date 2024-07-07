const Categories = require('./model');
const { getAllCategories, createAllCategories, getOneCategories, updateCategories, deleteCategories } = require('../../../services/mongoose/categories');

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
        
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};


const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);
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