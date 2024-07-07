const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        const result = await Categories.create({name});
    } catch (err) {
        next(err);
    }
}