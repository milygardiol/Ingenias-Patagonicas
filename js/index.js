

// Solicitar el nombre del usuario
//let nombre = prompt("Por favor, ingresa tu nombre:");

// Verificar si el usuario ingresó un nombre
//if (nombre) {
// Mostrar un mensaje de agradecimiento personalizado
//   alert("¡Gracias por visitar nuestro sitio web y nuestra Provincia, " + nombre + "!" + " Esperamos que disfrutes tu visita.");
//} else {
// Mostrar un mensaje de agradecimiento general si no se ingresó un nombre
//   alert("¡Gracias por visitar nuestro sitio web y nuestra Provincia! Esperamos que disfrutes tu visita.");
//}


//prueba
import dbUsuarios from '../json/usuarios.json';
console.log(dbUsuarios);

async function fetchJSON() {
    try {
        let respuesta = await fetch('./json/usuarios.json');
        let usuarios = await respuesta.json();
        console.log(usuarios);

    } catch (error) {
        console.error("Error con el fetching JSON: ", error);
    }
};

fetchJSON();

// Solicitar los datos
let nombre = prompt("Por favor, ingresa tu nombre:");
let email = prompt("Ingrese su email: ");
let password = prompt("Ingrese su contraseña: ");




if (nombre = ! null, email != null, password != null) {
    let guardarUsuario = false
    for (let i = 0; i < usuarios.lenght; i++) {
        if (usuarios[i].email === email)
            alert("Bienvenido " + usuarios.nombre + " a nuestra página!")
        guardarUsuario = true;

    }

}


//while(nombre =! null, email != null, password != null) {
//    prompt("Ingrese sus datos correctamente para ingresar")
//    nombre = prompt("Por favor, ingresa tu nombre:");
//    email = prompt("Ingrese su email: ");
//    password = prompt("Ingrese su contraseña: ");
//};

