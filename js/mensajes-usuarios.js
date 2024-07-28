//ACCEDO A LA INFORMACIÓN ALMACENADA EN LOCAL STORAGE

let dbContacto = JSON.parse(localStorage.getItem('contacto'));
console.log(dbContacto);



// VALIDACIONES - ERRORES - MENSAJES AL USUARIO

window.addEventListener('load',function(){

    let formularioContacto = document.getElementById("formulario-contacto");
    let inputApellidoNombre = document.getElementById("apellido-nombre-contacto");
    let inputEmailContacto = document.getElementById("email-contacto");
    let inputMensajeContacto = document.getElementById("mensaje-contacto");
    let divErroresContacto = document.getElementById("errores-contacto")

    formularioContacto.addEventListener("submit",function(event){

        event.preventDefault();

        let arrayErroresContacto = [];

        if(inputApellidoNombre.value.length < 4){
            arrayErroresContacto.push('El campo Apellido y Nombre debe contener al menos 4 caracteres');
        }
    
        if (inputMensajeContacto.value.length > 160){
            arrayErroresContacto.push('El campo Mensaje puede contener hasta 160 caracteres');
        }
    
        if (arrayErroresContacto.length > 0) {
            let ulErroresContacto = document.createElement('ul');
            for(let i = 0; i < arrayErroresContacto.length; i++){
                ulErroresContacto.innerHTML += `<li> ${arrayErroresContacto[i]} </li>`
            }
            divErroresContacto.appendChild(ulErroresContacto);
        } else {
            dbContacto.push(
                {
                ApellidoNombre: inputApellidoNombre.value,
                Email: inputEmailContacto.value,
                Mensaje: inputMensajeContacto.value
                });
            sessionStorage.setItem('contacto', dbContacto);
            let respuestaMensajeRecibido = document.createElement('p');
            respuestaMensajeRecibido.innerHTML = "Hemos recibido tu mensaje, en breve te contactaremos.";
            formularioContacto.reset();
        }
    });
});