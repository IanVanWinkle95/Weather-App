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

weatherForm.addEventListener("submit", event => {

})

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function displayError(message) {

}