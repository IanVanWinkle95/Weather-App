const MY_API_KEY = "628bdc8e1ad8007298efea1d9e1f7f67";

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`
    const response = await fetch(apiUrl)
    // console.log(response)
  
    if (!response.ok) {
      throw new error("Could not fetch weather data")
    }
    return await response.json()
  }

export default getWeatherData;