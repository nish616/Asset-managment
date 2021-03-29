const express = require('express');
require('pug');

//DB connection
require('./ORM/init')();

//Routes
const homeRoute = require('./routes/dashboard.router');
const empRoute = require('./routes/employee.router');
const assetRoute = require('./routes/asset.router');

const app = express();


app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', homeRoute);
//app.use('/', empRoute);
app.use('/', assetRoute);

app.listen(3000,console.log('Server up and running!'));