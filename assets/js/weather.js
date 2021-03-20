function weatherBalloon( cityID ) {
    var key = 'e33520267233b063fa7fb34f23828f0f';
    fetch(' https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
    })
    .catch(function() {
    // catch any errors
    });
}

window.onload = function() {
    weatherBalloon( 2964574 );
}    

function refreshWeather(){
    weatherBalloon( 2964574 );
}

function drawWeather( weatherData ) {
    var celcius = Math.round(parseFloat(weatherData.main.temp)-273.15);
    
    switch (weatherData.weather[0].description){
        case "clear sky":
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-sun"></i>';
            break;
        case "few clouds":
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud"></i>';
            break;
        case "scattered clouds": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud-sun"></i>';
            break;
        case "broken clouds": 
             document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud"></i>';
             break;
        case "shower rain": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud-rain"></i>';
            break;
        case "rain": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
            break;
        case "thunderstorm": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-bolt"></i>';
            break;
        case "snow": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-snowflake"></i>';
            break;
        case "mist": 
            document.getElementById('weather-icon').innerHTML = '<i class="fas fa-smog"></i>';
            break;
        default: 
            
    }

    document.getElementById('weather-temp').innerHTML = celcius + '&deg;'+ " ";
}