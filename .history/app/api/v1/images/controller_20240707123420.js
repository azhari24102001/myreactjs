const { StatusCodes } = require('http-status-codes');
const { createImages } = require('../../../services/mongoose/images');

const createImages = async (req, res, next ) => {
    try {
        const result = await.createImages(req);

        res.data(StatusCodes.CREA)
    } catch (err) {
        next(err);
    }
}