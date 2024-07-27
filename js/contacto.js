// REQUIERO EL ARCHIVO JSON - LO PASO A ARRAY

let fs = require("fs");
let rutaArchivo = "../json/contacto.json";
let contactoJSON = fs.readFileSync(rutaArchivo,"utf-8");
let contactoArray = JSON.parse(contactoJSON);

console.log(contactoArray)



// CAPTURO EL FORMULARIO Y LA INFORMACION INGRESADA EN CADA CAMPO

let formularioDeContacto = document.getElementById('formulario-contacto');
let apellidoNombreContacto = document.getElementById("apellido-nombre-contacto");
let emailContacto = document.getElementById("email-contacto");
let mensajeContacto = document.getElementById("mensaje-contacto");



// VALIDACIONES Y ERRORES
/*
- Que el campo de Apellido y Nombre no esté vacío.
- Que el campo de Apellido y Nombre se complete con más de 4 caracteres.
- Que el campo de Email no esté vacío.
- Que el campo de Mensaje no supere los 60 caracteres.
*/

window.addEventListener('load',function(){

formularioDeContacto.addEventListener("submit",function(event){
    
    let erroresContacto = [];

    if (apellidoNombreContacto.value == ''){
        erroresContacto.push('El campo Apellido y Nombre tiene que estar completo')
    }else if(apellidoNombreContacto.value.length < 4){
        erroresContacto.push('El campo Apellido y Nombre debe contener al menos 4 caracteres')
    }

    if (emailContacto.value == ''){
        erroresContacto.push('El campo Email tiene que estar completo')
    }

    if (mensajeContacto.value.length > 60){
        erroresContacto.push('El campo Mensaje puede contener hasta 60 caracteres')
    }


    if (erroresContacto.length > 0) {event.preventDefault();
    let ulErroresContacto = document.querySelector("#lista-errores-contacto");
        for(let i = 0; i < erroresContacto.length; i++){
            ulErroresContacto.innerHTML += `<li> ${errores[i]} </li>`
        }
    }
})})



// PUSHEO INFORMACIÓN DEL FORMULARIO AL ARRAY



// PASO A FORMATO JSON

let contactoJSONParaGuardar = JSON.stringify(contactoArray)



// ALMACENO INFORMACIÓN NUEVA EN ARCHIVO JSON

fs.writeFileSync(rutaArchivo, contactoJSONParaGuardar,"utf-8");