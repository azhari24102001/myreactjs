const express = require('express')
const router = express();
const { create } = require('./controller');

router.get('/categories', (req, res) =>{
    const data = [
        {
            _id:1,
        }
    ]
});

module.exports = router;