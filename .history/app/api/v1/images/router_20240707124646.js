const express = require('express')
const router = express();
const { create } = require('./controller');

const upload = require('../../../middlewares/multer');

router.post('/categories',upload.single create);

module.exports = router;