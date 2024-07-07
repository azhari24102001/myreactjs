const express = require('express')
const router = express();
const { create, index, find, update, destroy } = require('./controller');

router.post('/categories', create);

module.exports = router;