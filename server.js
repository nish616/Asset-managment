const express = require('express');
const bodyParser = require('body-parser');
require('pug');

//DB connection
require('./ORM/init')();

//Routes
const homeRoute = require('./routes/dashboard.router');
const empRoute = require('./routes/employee.router');


const app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', homeRoute);
app.use('/', empRoute);

app.listen(3000,console.log('Server up and running!'));