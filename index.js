

const apiKey = "9b007f0729280dac2b0029733af48220";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//adding const for searching city name with doc query

const seachBox = document.querySelector(".search input");
const seachBtn = document.querySelector(".search button");

//adding images accordinng to weather 
const weatherIcon = document.querySelector(".weather-icon");


// Adding async fiunction
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //adding the conndiotn for the invalid city name 
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        //to log the data in console we will cooment out this at 36.40mins
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        //adding the image according to the weather updating from api of the eather app dev tools 

        //App used in this is : https://home.openweathermap.org/api_keys
        //
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-app-img/images/clouds.png"
        }
        else if ((data.weather[0].main == "Clear")) {
            weatherIcon.src = "weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzel") {
            weatherIcon.src = "weather-app-img/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "weather-app-img/images/clouds.png"
        }

        //after the console.log commented need to addt he doc query for getting data as we search
        document.querySelector(".weather").style.display = "block"
       
        //for displaying  nothing once the data was displaying following condition is necesary
        document.querySelector(".error").style.display = "none";

    }
}
//adding event listener on click button
seachBtn.addEventListener("click", () => {
    checkWeather(seachBox.value);
})