const express = require('express');
const mongoose = require('mongoose');

const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const cors = require('cors');;

//configs of the App
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Conect with database
mongoose.connect("mongodb://localhost:27017/parking", {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

requireDir('./src/models');


app.use('/api', require('./src/routes'));
app.listen(3001);