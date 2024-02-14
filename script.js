const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humadity = document.getElementById('humadity');
const wind_speed = document.getElementById('wind-speed');
const weather_body = document.querySelector('.weather-body');
const location_not_found = document.querySelector('.location-not-found');


async function checkWeather(city) {
    const apiKey = "1c20e0cc401186b9766db566799a1b86";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weather_data = await fetch(`${url}`)
        .then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humadity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

    switch (weather_data.weather[0].main) {
        case 'Cloud':
            weather_img.src = "/assest/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assest/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assest/rain.png";
            break;
        case 'Snow':
            weather_img.src = "/assest/snow.png";
            break;
        case 'Mist':
            weather_img.src = "/assest/mist.png";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
}); 