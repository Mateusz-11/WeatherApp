const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=3707794eb9729af4359f3845bdfeda07";
const API_UNITS = "&units=metric";

const getWeather = () => {
	const city = input.value || "Warsaw";
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios.get(URL).then((res) => {
		// console.log(res.data);
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);
		const pict = status.id;
		console.log(status);

		cityName.textContent = res.data.name;

		temperature.textContent = `${Math.floor(temp)} °C`;
		humidity.textContent = `${hum}%`;

		// console.log(res.data.weather[0]);
		weather.textContent = status.main;

        if status.id 
	});
};

// getWeather();
button.addEventListener("click", getWeather);
