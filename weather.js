function onGeo(position){
 const lag = position.coords.latitude;
 const lng = position.coords.longitude;
 const API_KEY = `http://example.${lag},${lng}com/movies.json`
 fetch(API_KEY)
    .then((response) => response.json())
    .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText =(data.weather.main);
    city.innerText =(data.weather.main)
})
}


function error(){
    console.log("error");
}

navigator.geolocation.getCurrentPosition(onGeo,error);


