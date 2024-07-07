const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const { name } = req.body
    } catch (err) {
        next(err);
    }
}