const express = require('express')
const router = express();
const { create } = require('./controller');

const upload = require('../../../middlewares/')

router.post('/categories', create);

module.exports = router;