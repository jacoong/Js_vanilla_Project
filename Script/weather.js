
const weatherDescription =document.querySelector("#weather_Description");


function onGeo(position){
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;
 const API_KEY = `5817c30b483f9e727dd1f622a450f7db`
 const API_Call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
 fetch(API_Call)
    .then((response) => response.json())
    .then((data) => {
    const weatherimg = document.querySelector("#weatherbottom span:first-child");
    const weathertem = document.querySelector("#weatherbottom span:last-child");
    weathertem.classList.add("degree");
    const weather_ele = document.querySelector("#weather span:first-child");
    const weather=(data.weather[0].main);

    let tem= (data.main.temp);
    tem = Math.round(tem);
    const country=(data.sys.country);
    const place = (data.name);
    const feeltem =(data.main.feels_like);
    const temp_max =(data.main.temp_max);
    const temp_min =(data.main.temp_min);
    const humidity =(data.main.humidity);
    const description =(data.weather[0].description);
    
        
    const weather_img = document.createElement("img");
    weather_img.setAttribute("src",`img/${weather}.png`);
    weatherimg.appendChild(weather_img);
    weathertem.innerText =`${tem}℃`


    weather_ele.innerText =`${place} ${country}`;
    
    
    weatherDescription.innerText=
    
    (`Weather:${weather}
    Feel Temperature: ${feeltem}℃
    Temperature Max: ${temp_max}℃
    Temperature Min: ${temp_min}℃
    Humidity: ${humidity}
    Description: ${description}`);
})
}


function error(){
    console.log("error");
}

function descripWeatherInfo(){
    weatherDescription.classList.remove(HIDDEN);
}

function descripWeatherInfoDel(){
    weatherDescription.classList.add(HIDDEN);
}


navigator.geolocation.getCurrentPosition(onGeo,error);
weather.addEventListener("mouseenter",descripWeatherInfo);
weather.addEventListener("mouseleave",descripWeatherInfoDel);

