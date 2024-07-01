
let estacion = prompt("¿En qué estación planea visitar la provincia? (verano, otoño, invierno o primavera)");

estacion = estacion.toLowerCase();

switch (estacion) {
    case "verano": 
        alert("Le recomendamos asistir a la Fiesta Nacional del Puestero, celebrada en el mes de febrero en Junín de Los Andes.");
        break;
    case "otoño": 
        alert("Le recomendamos asistir a la Fiesta de la Confluencia, celebrada en el mes de junio en Neuquén Capital.");
        break;
    case "invierno": 
        alert("Le recomendamos asistir a la Fiesta del Mate, celebrada en el mes de julio en Las Ovejas.");
        break;
    case "primavera": 
        alert("Le recomendamos asistir a la Fiesta Nacional del Chivito, celebrada en el mes de octubre en Chos Malal.");
        break;
    default:
        alert("No ingresó una estación válida.");
}