import { createNotification } from "../components/notificaciones.js";
const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#nombre-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#password-input2');
const btnRegistro = document.querySelector('#form-btn');
//console.log(axios);

//validamos
//validacion con regex
const nameVal = /^[A-Z]{1}[a-zA-Z]+( [A-Z]{1}[a-zA-Z]+)?$/g;
const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!#$%&'*+/=?^_`<>,{|}~-]).{8,}$/gm;

let valname = false;
let valemail = false;
let valpass = false;
let valMacth = false;

nameInput.addEventListener('input', e => {
    valname = nameVal.test(e.target.value);
    //console.log(valname);
    validar(nameInput,valname)
})

emailInput.addEventListener('input', e =>{
    valemail = emailVal.test(e.target.value);
    validar(emailInput,valemail);
})

passwordInput.addEventListener('input', e =>{
    valpass = passwordVal.test(e.target.value);
    validar(passwordInput,valpass);
    validar(matchInput,valpass)
})

const validar = (input,value)=>{
    btnRegistro.disabled = valname && valemail && valpass && valMacth ? false : true;
    
    console.log(btnRegistro.disabled);
    if (value) {
        input.classList.remove('focus:outline-blue-600', 'outline-4');
        input.classList.remove('focus:outline-red-700', 'outline-4');
        input.classList.add('focus:outline-green-700', 'outline-4');
    }else if(input.value === ''){
        input.classList.remove('focus:outline-green-700', 'outline-4');
        input.classList.remove('focus:outline-red-700', 'outline-4');
        input.classList.add('focus:outline-blue-600', 'outline-4');
    }else{
        input.classList.remove('focus:outline-blue-600', 'outline-4');
        input.classList.remove('focus:outline-green-700', 'outline-4')
        input.classList.add('focus:outline-red-700', 'outline-4')
    }
}

matchInput.addEventListener('input', e =>{
    valMacth = e.target.value === passwordInput.value;
    validar(matchInput,valMacth)
})

formulario.addEventListener('submit', async e =>{
    e.preventDefault();

    try {
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password:passwordInput.value
        }

        formulario.reset();

        const response = await axios.post('/api/users', newUser);
        console.log(response);

        console.log(newUser);
    } catch (error) {
        console.log(error);
        createNotification(true,error.response.data.error)
    }
})


