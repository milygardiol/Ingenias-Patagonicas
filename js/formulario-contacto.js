//CREO UNA VARIABLE QUE ALMACENA UN ARRAY EN EL QUE GUARDARÉ LA INFORMACIÓN DE LOS USUARIOS QUE NOS CONTACTAN

let dbContacto = [
    {
        "ApellidoNombre": "Benitez Gabriela",
        "Email": "gabriela@gmail.com",
        "Mensaje": "Quisiera solicitar recomendación de tours en Villa Traful. Gracias."
    },
    {
        "ApellidoNombre": "Paez Daniel",
        "Email": "daniel@gmail.com",
        "Mensaje": "Quisiera consultar cuál es la mejor fecha para conocer la Ruta de los Siete Lagos. Saludos."
    },
    {
        "ApellidoNombre": "Roldán Romina",
        "Email": "romina@gmail.com",
        "Mensaje": "Quisiera conocer las tarifas de acceso actualizadas al Parque Nacional Arrayanes. Muchas Gracias."
    }
]

localStorage.setItem('contacto', JSON.stringify(dbContacto));
dbContacto = JSON.parse(localStorage.getItem('contacto'));
console.log(dbContacto);



// VALIDACIONES - ERRORES - MENSAJES AL USUARIO

window.addEventListener('load',function(){

    //Creo variables para almacenar elementos de html mediante selectores
    let formularioContacto = document.getElementById("formulario-contacto");
    let inputApellidoNombre = document.getElementById("apellido-nombre-contacto");
    let inputEmailContacto = document.getElementById("email-contacto");
    let inputMensajeContacto = document.getElementById("mensaje-contacto");
    let divErroresContacto = document.getElementById("errores-contacto");
    let divMensajeRecibido = document.getElementById("mensaje-recibido");

    formularioContacto.addEventListener("submit",function(event){

        event.preventDefault();

        divErroresContacto.innerHTML = ''; //Limpio errores
        divMensajeRecibido.innerHTML = ''; //Limpio mensaje de recibido

        let arrayErroresContacto = [];

        if(inputApellidoNombre.value.length < 4){
            arrayErroresContacto.push('El campo Apellido y Nombre debe contener al menos 4 caracteres');
        } //Primera validación
    
        if (inputMensajeContacto.value.length > 160){
            arrayErroresContacto.push('El campo Mensaje puede contener hasta 160 caracteres');
        } //Segunda validación
    
        if (arrayErroresContacto.length > 0) { //Si hay errores, los muestro y los agrego a la lista
            let ulErroresContacto = document.createElement('ul');
            for(let i = 0; i < arrayErroresContacto.length; i++){
                ulErroresContacto.innerHTML += `<li> ${arrayErroresContacto[i]} </li>`;
            }
            divErroresContacto.appendChild(ulErroresContacto);
        } else { //Si no hay errores, pusheo al array de datos
            dbContacto.push({
                ApellidoNombre: inputApellidoNombre.value,
                Email: inputEmailContacto.value,
                Mensaje: inputMensajeContacto.value
                });
            localStorage.setItem('contacto', JSON.stringify(dbContacto)); //Almaceno información nueva en local storage
            let respuestaMensajeRecibido = document.createElement('p'); //Le digo al usuario que su mensaje fue recibido
            respuestaMensajeRecibido.innerHTML = `Hemos recibido tu mensaje, ${inputApellidoNombre.value}, en breve te contactaremos.`;
            divMensajeRecibido.appendChild(respuestaMensajeRecibido);
            formularioContacto.reset();//Para que el formulario vuelva a ponerse en blanco
        }
    });
});