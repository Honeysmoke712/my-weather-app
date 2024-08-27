
//TEMPERATURE
function updateWeather(response) {

    let temperatureElement = document.querySelector("#current-temp");
    let temperature = (response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city; 
    temperatureElement.innerHTML = Math.round(temperature);
    
   
    getForecast(response.data.city);

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

//FORECAST

function getForecast(city) {
  let apiKey = "0fo9f7cff9112b546tb3124acea4be3b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios(apiUrl).then(displayForecast);
  
  console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response);


let days = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`,`SAT`];
let forecastHtml = "";

days.forEach(function (day) {

  forecastHtml = 
  forecastHtml + 
  `
      <div class="forecast" id="forecast">
      <div class="daily-forecast">
         <p class="day">${day}</p>
         <img src="images/clouds-512.png" alt="cloud" class="daily-img">
        <p class="daily-temp">76°  97°</p>
      </div>
    `;
});

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
}

    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit", handleSearchSubmit);

getForecast();
displayForecast();

searchCity("Paris");