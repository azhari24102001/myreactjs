const express = require('express')
const router = express();
const { create } = require('./controller');

router.get('/categories', (req, res) =>{
    const data = [
        {
            _id:1,
            name: 'seminar',
        },
        {
            _id:2,
            name: 'MERN',
        },
    ]
});

module.exports = router;