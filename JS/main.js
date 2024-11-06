import getWeatherData from './index.js';
import { displayWeatherInfo, displayError } from './script.js';

const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")



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