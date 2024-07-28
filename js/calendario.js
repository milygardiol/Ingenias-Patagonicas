//Estación en la que el usuario viajará a la provincia y fiesta recomendada en formato JSON

let dbFiestaRecomendada = [
    {
        "estacion" : "invierno",
        "fiesta" : "Fiesta del Mate"
    }
];

dbFiestaRecomendada = JSON.stringify(dbFiestaRecomendada);

let db = JSON.parse(dbFiestaRecomendada);



//Pregunto al usuario en qué estación desea viajar a la provincia - convierto a minúscula

let estacionIngresada = prompt("¿En qué estación te gustaría visitar Neuquén? (verano, otoño, invierno o primavera)");

estacionIngresada = estacionIngresada.toLowerCase();

console.log(estacionIngresada);



//Alert para recomendarle la fiesta más popular de esa estación - Alert genérico

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



//Push al array si la estación ingresada es válida

if (estacionIngresada === ("verano" || "primavera" || "otoño" || "invierno")) {
    db.push (
        {
            estacion: estacionIngresada,
            fiesta: fiestaRecomendada
        }
    )}



//Console log de la base de datos

console.log(db);