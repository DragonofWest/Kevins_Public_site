/* My weather ID---> &APPID=93fbe2520d7c4cd0113025de258c34ad  <---*/
/* Preston Idaho map # is 5604473 */
/* Soda Springs Idaho map # 5607916*/
/* Montpelier near Fish Haven Idaho map #5601299  */
/*-----------------Preston---------------------------------------*/
var weatherRequest = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

weatherRequest.open("GET", apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("deg").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition").innerHTML= weatherData.weather[0].main;
    document.getElementById("currentcond").innerHTML= weatherData.weather[0].main;
    document.getElementById("humidity").innerHTML= weatherData.main.humidity;
    document.getElementById("mph").innerHTML= weatherData.wind.speed;

    var iconcode=weatherData.weather[0].icon;
    var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
    document.getElementById("weather_icon").src= icon_path;
}


/*-------------Soda Springs-----------------------------*/
var SSweatherRequest = new XMLHttpRequest();
var SSapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

SSweatherRequest.open("GET", SSapiURL, true);
SSweatherRequest.responseType = "text";
SSweatherRequest.send();

SSweatherRequest.onload = function () {
    var SSweatherData = JSON.parse(SSweatherRequest.responseText);
    console.log(SSweatherData);

    document.getElementById("SSdeg").innerHTML= SSweatherData.main.temp;
    document.getElementById("SScurrent-condition").innerHTML= SSweatherData.weather[0].main;
    document.getElementById("SScurrentcond").innerHTML= SSweatherData.weather[0].main;
    document.getElementById("SShumidity").innerHTML= SSweatherData.main.humidity;
    document.getElementById("SSmph").innerHTML= SSweatherData.wind.speed;

    var SSiconcode=SSweatherData.weather[0].icon;
    var SSicon_path= "https://openweathermap.org/img/w/"+ SSiconcode + ".png";
    document.getElementById("SSweather_icon").src= SSicon_path;

}

/*------------------Fish Haven--------------------------- */
var FHweatherRequest = new XMLHttpRequest();
var FHapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5601299&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

FHweatherRequest.open("GET", FHapiURL, true);
FHweatherRequest.responseType = "text";
FHweatherRequest.send();

FHweatherRequest.onload = function () {
    var FHweatherData = JSON.parse(FHweatherRequest.responseText);
    console.log(FHweatherData);

    document.getElementById("FHdeg").innerHTML= FHweatherData.main.temp;
        document.getElementById("FHcurrent-condition").innerHTML= FHweatherData.weather[0].main;
        document.getElementById("FHcurrentcond").innerHTML= FHweatherData.weather[0].main;
        document.getElementById("FHhumidity").innerHTML= FHweatherData.main.humidity;
        document.getElementById("FHmph").innerHTML= FHweatherData.wind.speed;
    
        var FHiconcode=weatherData.weather[0].icon;
        var FHicon_path= "https://openweathermap.org/img/w/"+ FHiconcode + ".png";
        document.getElementById("FHweather_icon").src= FHicon_path;
}