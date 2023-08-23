const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
       document.querySelector(".error").style.display = "block";
       document.querySelector(".weather").style.display = "none"; 
    }else{
        var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "animated/cloudy.svg"
}
else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "animated/cloudy-day-2.svg"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "animated/day.svg"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "animated/rainy-1.svg"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "animated/drizzle.svg"
}
else if(data.weather[0].main == "Thunder"){
    weatherIcon.src = "animated/thunder.svg"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "animated/thunder.svg"
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "animated/snowy_1.svg"
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


