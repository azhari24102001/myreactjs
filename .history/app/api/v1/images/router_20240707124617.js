const express = require('express')
const router = express();
const { create } = require('./controller');

const upload = require('../../')

router.post('/categories', create);

module.exports = router;