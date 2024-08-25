

//TEMPERATURE
function updateWeather(response) {

    let temperatureElement = document.querySelector("#temp");
    let temperature = (response.data.temperature.current);
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
}
//API
function searchCity(city) {
   let apiKey = "0fo9f7cff9112b546tb3124acea4be3b";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  
axios.get(apiUrl).then(updateWeather);
}

//FORM

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
 }

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

//FORECAST


function displayForecast() {
let forecast = document.querySelector("#forecast");

let days = [`TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`, `MON`];

let foercastHtml = "";
days.forEach(function (day) {

foercastHtml = foercastHtml + `
<div class="forecast-day">
  <div class="Weather-forecast-day">SUN</div>
  <div class="Weather-forecast-icon"><img src="images/sun-512.png" alt="sunny" class="icon"></div>
  <div class="Weather-forecast-temperatures">99&degF 100&degF</div>    
</div>
`;
});
forecastElement.innerHTML = foercastHtml
}


