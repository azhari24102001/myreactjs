const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();


//router
const categoriesRouter = require('./app/api/v1/categories/')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to semina',
    });
});

module.exports = app;
