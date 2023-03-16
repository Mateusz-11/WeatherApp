import API_KEY_0 from "keys.js";

const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

console.log("Test");
console.log(API_KEY_0);

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = API_KEY_0;
const API_UNITS = "&units=metric";

const getWeather = () => {
	const city = input.value || "Warsaw";
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);
			const pict = status.id;

			// console.log(status.id);

			cityName.textContent = res.data.name;

			temperature.textContent = `${Math.floor(temp)} °C`;
			humidity.textContent = `${hum}%`;

			// console.log(res.data.weather[0]);
			weather.textContent = status.main;

			warning.textContent = "";
			input.value = "";

			if (status.id >= 200 && status.id < 300) {
				photo.src = "img/thunderstorm.png";
			} else if (status.id < 400) {
				photo.src = "img/drizzle.png";
			} else if (status.id < 600) {
				photo.src = "img/rain.png";
			} else if (status.id < 700) {
				photo.src = "img/fog.png";
			} else if (status.id === 800) {
				photo.src = "img/sun.png";
			} else if (status.id >= 800 && status.id < 900) {
				photo.src = "img/cloud.png";
			} else {
				photo.src = "img/unknown.png";
			}
		})
		.catch(() => (warning.textContent = "Text the name of the city"));
};

const enterCheck = (e) => {
	if (e.key === "Enter") {
		getWeather();
	}
};

input.addEventListener("keyup", enterCheck);
button.addEventListener("click", getWeather);
getWeather();
