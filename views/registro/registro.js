const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#nombre-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#password-input');
const btnRegistro = document.querySelector('#form-btn');

//validamos
//validacion con regex
const nameVal = /^[A-Z]{1}[a-zA-Z]+( [A-Z]{1}[a-zA-Z]+)?$/g;

let valname = false;

nameInput.addEventListener('input', e => {
    valname = nameVal.test(e.target.value);
    //console.log(valname);
    if (valname) {
        nameInput.classList.remove('focus:outline-blue-600', 'outline-4');
        nameInput.classList.remove('focus:outline-red-700', 'outline-4');
        nameInput.classList.add('focus:outline-green-700', 'outline-4');
    }else if(nameInput.value === ''){
        nameInput.classList.remove('focus:outline-green-700', 'outline-4');
        nameInput.classList.remove('focus:outline-red-700', 'outline-4');
        nameInput.classList.add('focus:outline-blue-600', 'outline-4');
    }else{
        nameInput.classList.remove('focus:outline-blue-600', 'outline-4');
        nameInput.classList.remove('focus:outline-green-700', 'outline-4')
        nameInput.classList.add('focus:outline-red-700', 'outline-4')
    }
})

