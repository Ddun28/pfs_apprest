const mongoose = require('mongoose');

//1. Conectar a mongoDB, crear la dependencia
const userSchema = new mongoose.Schema({

    //2. Definir el schema
    name:String,
    email:String,
    password:String,
    verified:{
        type:Boolean,
        default:false
    }
})

//3. Configurar la respuesta del usuario en el schema 
userSchema.set('toJSON', {
    //document es el schema
    //returnObject es lo que estoy solicitando
    transform:(document,returnObject) =>{
        //estoy creando una nueva propiedad que se llame 
        //convertimos de objeto a string
        returnObject.id = returnObject._id.toString();
        //voy a borrar la propiedad _id
        delete returnObject._id;
        //borrar version
        delete returnObject.__v;
    }
})

//4. Asignar un nombre, registrar el modelo, que datos
//o colecciones(tablas) tiene ese modelo esta en userschema

const User = mongoose.model('User', userSchema);
module.exports = User;