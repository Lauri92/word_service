'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const englishWordRoute = require('./routes/englishWordRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./localhost')(app, process.env.HTTPS_PORT, process.env.HTTP_PORT);
console.log('App started on localhost.');

app.use('/words', englishWordRoute);