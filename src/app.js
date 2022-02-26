const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const markeRoutes = require('./routers/marke');





const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(morgan('dev'));
app.use(json());

app.use('/api/marke', markeRoutes);

module.exports = app;