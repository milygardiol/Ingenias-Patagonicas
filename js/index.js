const dbUsuarios = require('./json/usuarios.json')

// Solicitar el nombre del usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let email = prompt("Ingrese su email: ");
let password = prompt("Ingrese su contraseña: ");



let usuarios = JSON.parse(dbUsuarios);
console.log(usuarios);


while(nombre =! null, email != null, password != null) {
    prompt("Ingrese sus datos correctamente para ingresar")
    nombre = prompt("Por favor, ingresa tu nombre:");
    email = prompt("Ingrese su email: ");
    password = prompt("Ingrese su contraseña: ");
};


