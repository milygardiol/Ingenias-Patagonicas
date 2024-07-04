// Leer la base de datos desde localStorage
function leerUsuarios() {
    const data = localStorage.getItem('usuarios');
    return data ? JSON.parse(data) : [];
}

// Guardar la base de datos en localStorage
function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Agregar un nuevo usuario a la base de datos
function agregarUsuario(nombre, email, password) {
    let usuarios = leerUsuarios();
    usuarios.push({ nombre, email, password });
    guardarUsuarios(usuarios);
}

//Solicita los datos del usuario mediante "prompt" añade al usuario a la bd y almacena la información en localStorage
function solicitarDatos() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let email = prompt("Ingrese su email: ");
    let password = prompt("Ingrese su contraseña: ");

    if (nombre && email && password) {
        agregarUsuario(nombre, email, password);
        almacenarEnStorage(nombre, email, password);
        alert("Usuario agregado exitosamente.");
    } else {
        alert("Por favor, ingrese todos los datos correctamente.");
        solicitarDatos(); // Volver a solicitar datos
    }
}


//Almacenar en localStorage
function almacenarEnStorage(nombre, email, password) {
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

//Mostramos la información guardada por consola y en la inspección del nav
function mostrarInfo() {
    let nombre = localStorage.getItem('nombre');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');

    if (nombre || email || password) { // Verificar si hay datos en el almacenamiento
        console.log(`Nombre: ${nombre}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    } else {
        console.log("No hay información guardada.");
    }
}


//Ejecutamos la función principal
solicitarDatos();
mostrarInfo();
