const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const cors = require('cors');
const markeRoutes = require('./routers/marke');





const app = express();

/*app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/
app.use(cors());

app.use(morgan('dev'));
app.use(json());

app.use('/api/marke', markeRoutes);

module.exports = app;