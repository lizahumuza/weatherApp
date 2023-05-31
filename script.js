const inputCity = document.getElementById("location");
const form = document.querySelector("form");
const weatherInfo = document.getElementById("weatherInfo");
const errorElement = document.getElementById("error");

async function fetchWeatherData(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac363587152241107a97b9599922302a`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
}

function renderWeatherInfo(weatherData) {
  const weatherDescription = weatherData.weather[0].description;
  const temperature = weatherData.main.temp;

  const weatherDescDiv = document.createElement("div");
  weatherDescDiv.innerText = `${weatherDescription}`;
  weatherDescDiv.classList.add("desc");

  const cityDiv = document.createElement("div");
  cityDiv.innerText = inputCity.value;
  cityDiv.classList.add("cit");

  const temperatureDiv = document.createElement("div");
  temperatureDiv.innerText = `${temperature} \u00B0C`;
  temperatureDiv.classList.add("deg");

  weatherInfo.innerHTML = "";
  weatherInfo.appendChild(weatherDescDiv);
  weatherInfo.appendChild(cityDiv);
  weatherInfo.appendChild(temperatureDiv);

  errorElement.textContent = "";
}

async function getWeatherInfo(city) {
  try {
    const weatherData = await fetchWeatherData(city);
    renderWeatherInfo(weatherData);
  } catch (error) {
    errorElement.textContent = error.message;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = inputCity.value;
  await getWeatherInfo(city);
});
