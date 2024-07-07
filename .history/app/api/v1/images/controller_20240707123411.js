const { createImages } = require('../../../services/mongoose/images');

const createImages = async (req, res, next ) => {
    try {
        const result = await.createImages(req);

        res.data
    } catch (err) {
        next(err);
    }
}