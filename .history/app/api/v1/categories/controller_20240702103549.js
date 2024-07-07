const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        contst result = await Categories.create 
    } catch (err) {
        next(err);
    }
}