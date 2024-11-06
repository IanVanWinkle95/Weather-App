// Was going to make something like a Quote of the day/dad jokes. 
// Ran into some weird issues with the import export. Not sure if it had to do with-
// the API key or the Autherization. Pivoted to a Weather App that someone else mentioned.

// import { MY_API_KEY } from "./index.js";

// fetch("https://icanhazdadjoke.com/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "quotes15.p.rapidapi.com",
// 		"x-rapidapi-key": MY_API_KEY
// 	}
// })
// .then(response => response.json())
// .then(response => {
//     console.log(response);

//     document.getElementById('quote').innerHTML = response.content;
//     document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
// })

//   .catch(error => {
//     if (error instanceof TypeError) {
//       console.error('Type Error:', error);
//     } else {
//       console.error('Error:', error);
//     }
//   })
//---------------------------------------------------------------------------------------------

const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const MY_API_KEY = "628bdc8e1ad8007298efea1d9e1f7f67"

weatherForm.addEventListener("submit", async event => {

  event.preventDefault()

  const city = cityInput.value
  if (city) {
    try {
      const weatherData = await getWeatherData(city)
      displayWeatherInfo(weatherData)
    }
    catch (error) {
      console.error(error)
      displayError(error)
    }
  } else {
    displayError("Enter a City")
  }
})

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`
  const response = await fetch(apiUrl)
  // console.log(response)

  if (!response.ok) {
    throw new error("Could not fetch weather data")
  }
  return await response.json()
}

function displayWeatherInfo(data) {
  // console.log(data)
  const { name: city,
    main: { temp, humidity },
    weather: [{ description }] } = data

  card.textContent = ""
  card.style.display = "flex"

  const cityDisplay = document.createElement("h1")
  const tempDisplay = document.createElement("p")
  const humidityDisplay = document.createElement("p")
  const descriptionDisplay = document.createElement("p")

  cityDisplay.textContent = city
  tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`
  humidityDisplay.textContent = `humidity: ${humidity}%`
  descriptionDisplay.textContent = description

  cityDisplay.classList.add("cityDisplay")
  tempDisplay.classList.add("tempDisplay")
  humidityDisplay.classList.add("humidityDisplay")
  descriptionDisplay.classList.add("descrriptionDisplay")

  card.appendChild(cityDisplay)
  card.appendChild(tempDisplay)
  card.appendChild(humidityDisplay)
  card.appendChild(descriptionDisplay)
}

function displayError(message) {

  const errorDisplay = document.createElement("p")

  errorDisplay.textContent = message
  errorDisplay.classList.add("errorDisplay")

  card.textContent = ""
  card.style.display = "flex"
  card.appendChild(errorDisplay)
}