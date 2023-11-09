//lo primero que vamos a hacer es un router
//router: registrar POST, GET, Delete
const userRouter = require('express').Router();
//luego que definimos el router y los exportamos en app.js

//registrar lo que el usuario me envia 
userRouter.post('/', (request, response) => {
    //console.log(request.body);
    const {name, email, password} = request.body;
    console.log(name,email,password);

    if(!name || !email || !password){
        //console.log('campo vacio');
        return response.status(400).json({error:'Todos los campos son requeridos'})
    };
})

module.exports = userRouter; 
