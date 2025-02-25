const express = require('express')
const router = express();
const { create, index, find } = require('./controller');

router.get('/categories', index);
router.get('/categories/:id', find);
router.get('/categories/:id', put);

router.post('/categories', create);

module.exports = router;