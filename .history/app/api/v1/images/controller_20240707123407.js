const { createImages } = require('../../../services/mongoose/images');

const createImages = async (req, res, next ) => {
    try {
        const result = await.createImages(req);
    } catch (err) {
        next(err);
    }
}