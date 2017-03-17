const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

require('dotenv').config();

const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(require('./resources.js'));

app.listen(process.env.PORT || 8000, () => console.log('Server is listening'));

