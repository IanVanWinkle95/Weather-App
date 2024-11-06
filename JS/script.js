const card = document.querySelector(".card")

function displayWeatherInfo(data) {
  console.log(data)
  const { name: city,
    main: { temp, humidity },
    weather: [{ description }] } = data

  card.textContent = ""
  card.style.display = "flex"

  const cityDisplay = document.createElement("h1")
  const tempDisplay = document.createElement("p")
  const humidityDisplay = document.createElement("p")
  const descriptionDisplay = document.createElement("p")
  const dateElement = document.createElement("p")

  cityDisplay.textContent = city
  tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`
  humidityDisplay.textContent = `Humidity: ${humidity}%`
  descriptionDisplay.textContent = description
  dateElement.textContent = new Date().toLocaleDateString()

  cityDisplay.classList.add("cityDisplay")
  tempDisplay.classList.add("tempDisplay")
  humidityDisplay.classList.add("humidityDisplay")
  descriptionDisplay.classList.add("descrriptionDisplay")

  card.appendChild(cityDisplay)
  card.appendChild(tempDisplay)
  card.appendChild(humidityDisplay)
  card.appendChild(descriptionDisplay)
  card.appendChild(dateElement)
}

function displayError(message) {

  const errorDisplay = document.createElement("p")

  errorDisplay.textContent = message
  errorDisplay.classList.add("errorDisplay")

  card.textContent = ""
  card.style.display = "flex"
  card.appendChild(errorDisplay)
}

export { displayWeatherInfo, displayError }