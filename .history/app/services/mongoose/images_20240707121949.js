// * 1. kita gunain cara ini
const createImages = async (req) => {
    const result = await Images.create({
      name: req.file
        ? `uploads/${req.file.filename}`
        : 'uploads/avatar/default.jpeg',
    });
  
    return result;
  };
  
  module.exports = { createImages, checkingImage };  