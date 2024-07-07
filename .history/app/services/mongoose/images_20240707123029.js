const Images = require('../../api/v1/images/model');


// * 2. generate url s
const generateUrlImage = async (req) => {
    const result = `uploads/${req.file.filename}`;
  
    return result;
  };

// * 1. kita gunain cara ini
const createImages = async (req) => {
    const result = await Images.create({
      name: req.file
        ? `uploads/${req.file.filename}`
        : 'uploads/avatar/default.jpeg',
    });
  
    return result;
  };

  module.exports = { createImages, generateUrlImage };  