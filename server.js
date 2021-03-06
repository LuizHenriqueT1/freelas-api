const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const app = express();

//Conexão com banco
mongoose.connect('mongodb://localhost:27017/dbfreelas' , 
    { useNewUrlParser: true,  useUnifiedTopology: true })

    requireDir('./src/models')

    app.use('/api', require('./src/routes'))

app.listen(3001);