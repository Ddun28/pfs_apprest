//lo primero que vamos a hacer es un router
//router: registrar POST, GET, Delete
const userRouter = require('express').Router();
//luego que definimos el router y los exportamos en app.js

//registrar lo que el usuario me envia 
userRouter.post('/', (request, response) => {
    //console.log(request.body);
    const {name, email, password} = request.body;
    console.log(name,email,password);
})

module.exports = userRouter; 
