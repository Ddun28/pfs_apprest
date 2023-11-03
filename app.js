require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controllers/users');

(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('te has conectado a MongoDb');
    } catch (error) {
        console.log(error);
    }
})();

//rutas de frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/registro', express.static(path.resolve('views', 'registro')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('images')));

//IMPORTANTE
app.use(express.json())

//rutas backend
app.use('/api/users', usersRouter);

module.exports = app;