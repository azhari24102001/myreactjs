const { StatusCodes } = require('http-status-codes');
const { createImages } = require('../../../services/mongoose/images');

const create = async (req, res, next ) => {
    try {
        console.log('req')
        const result = await createImages(req);

        res.data(StatusCodes.CREATED).json({data: result})
    } catch (err) {
        next(err);
    }
};

module.exports = { create };