// CAPTURO EL DIV QUE CREÉ EN HTML

const climaNeuquen = document.querySelector('#clima-en-neuquen');



// API REQUEST

fetch('https://api.weatherapi.com/v1/current.json?key=473df6076f824a90a8b151109240508&q=Neuquen&aqi=no')

.then((response) => response.json())

.then((data) => {
    console.log(data)
    
    const clima = data.current;

    // Inserto elementos HTML 
    climaNeuquen.insertAdjacentHTML(
        "beforeend",
        `
        <div class="div-clima">
            <h3>El tiempo en Neuquén:</h3>
            <i class="fa-solid fa-temperature-quarter"> ${clima.temp_c} °C </i>
            <i class="fa-solid fa-cloud"> ${clima.cloud} % </i>
            <i class="fa-solid fa-droplet"> ${clima.humidity} % </i>
        </div>
        `
        );
})

.catch((error) => {
    console.log(error);
});