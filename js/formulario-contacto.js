//CREO UNA VARIABLE QUE ALMACENA UN ARRAY EN EL QUE GUARDARÉ LA INFORMACIÓN DE LOS USUARIOS QUE CONTACTAN

let dbContacto = [
    {
        ApellidoNombre: "Benitez Gabriela",
        Email: "gabriela@gmail.com",
        Mensaje: "Quisiera solicitar recomendación de tours en Villa Traful. Gracias."
    },
    {
        ApellidoNombre: "Paez Daniel",
        Email: "daniel@gmail.com",
        Mensaje: "Quisiera consultar cuál es la mejor fecha para conocer la Ruta de los Siete Lagos. Saludos."
    },
    {
        ApellidoNombre: "Roldán Romina",
        Email: "romina@gmail.com",
        Mensaje: "Quisiera conocer las tarifas de acceso actualizadas al Parque Nacional Arrayanes. Muchas Gracias."
    }
]



//ALMACENO INFORMACIÓN OBTENIDA EN LOCAL STORAGE

localStorage.setItem('contacto', JSON.stringify(dbContacto));