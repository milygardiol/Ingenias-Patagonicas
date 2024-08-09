//ESTACION EN LA QUE EL USUARIO VIAJARÁ A LA PROVINCIA Y FIESTA RECOMENDADA EN FORMATO JSON Y LUEGO CONVERTIDO A ARRAY

let dbFiestaRecomendada = [
    {
        "estacion" : "invierno",
        "fiesta" : "Fiesta del Mate"
    }
];

dbFiestaRecomendada = JSON.stringify(dbFiestaRecomendada);
let db = JSON.parse(dbFiestaRecomendada);



//PREGUNTO EN QUÉ ESTACIÓN DESEA VISITAR LA PROVINCIA - CONVIERTO A MINÚSCULAS

let estacionIngresada = prompt("¿En qué estación te gustaría visitar Neuquén? (verano, otoño, invierno o primavera)");

estacionIngresada = estacionIngresada.toLowerCase();

//console.log(estacionIngresada);



//ALERT PARA RECOMENDARLE LA FIESTA MÁS POPULAR DE ESA ESTACIÓN - ALERT GENÉRICO

let fiestaRecomendada;

switch (estacionIngresada) {

    case "verano":
        fiestaRecomendada = "Fiesta Nacional del Puestero"
        alert("Te recomendamos asistir a la Fiesta Nacional del Puestero, celebrada en el mes de febrero en Junín de Los Andes.");
        break;

    case "otoño":
        fiestaRecomendada = "Fiesta de la Confluencia"
        alert("Te recomendamos asistir a la Fiesta de la Confluencia, celebrada en el mes de junio en Neuquén Capital.");
        break;

    case "invierno":
        fiestaRecomendada = "Fiesta del Mate"
        alert("Te recomendamos asistir a la Fiesta del Mate, celebrada en el mes de julio en Las Ovejas.");
        break;

    case "primavera":
        fiestaRecomendada = "Fiesta Nacional del Chivito"
        alert("Te recomendamos asistir a la Fiesta Nacional del Chivito, celebrada en el mes de octubre en Chos Malal.");
        break;

    default:
        alert("¡Esperamos que nos visites pronto!");
}



//PUSH AL ARRAY SI LA ESTACIÓN INGRESADA ES VÁLIDA

if (estacionIngresada === ("verano" || "primavera" || "otoño" || "invierno")) {
    db.push (
        {
            estacion: estacionIngresada,
            fiesta: fiestaRecomendada
        }
    )}



//HAGO CONSOLE LOG DE LA BASE DE DATOS

console.log(db);