/* My weather ID---> &APPID=93fbe2520d7c4cd0113025de258c34ad  <---*/
/* LA weather # is 5368361 */
/* Newport weather # 5376890 */
/* Redlands weather # 5386754  */
/* San Diego weather # 5391811  */
/*-----------------Los Angeles---------------------------------------*/
var weatherRequest = new XMLHttpRequest(); 
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

weatherRequest.open("GET", apiURL, true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("deg").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition").innerHTML= weatherData.weather[0].main;
    document.getElementById("humidity").innerHTML= weatherData.main.humidity;
    document.getElementById("mph").innerHTML= weatherData.wind.speed;

/*    var iconcode=weatherData.weather[0].icon;
    var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
    document.getElementById("weather_icon").src= icon_path;*/
}


/*-------------Newport-----------------------------*/
var NPweatherRequest = new XMLHttpRequest();
var NPapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

NPweatherRequest.open("GET", NPapiURL, true);
NPweatherRequest.responseType = "text";
NPweatherRequest.send();

NPweatherRequest.onload = function () {
    var NPweatherData = JSON.parse(NPweatherRequest.responseText);
    console.log(NPweatherData);

    document.getElementById("NPdeg").innerHTML= NPweatherData.main.temp;
    document.getElementById("NPcurrent-condition").innerHTML= NPweatherData.weather[0].main;
    document.getElementById("NPhumidity").innerHTML= NPweatherData.main.humidity;
    document.getElementById("NPmph").innerHTML= NPweatherData.wind.speed;

   /* var NPiconcode=NPweatherData.weather[0].icon;
    var NPicon_path= "https://openweathermap.org/img/w/"+ NPiconcode + ".png";
    document.getElementById("NPweather_icon").src= NPicon_path; */

}

/*------------------Redlands--------------------------- */
var RLweatherRequest = new XMLHttpRequest();
var RLapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5386754&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

RLweatherRequest.open("GET", RLapiURL, true);
RLweatherRequest.responseType = "text";
RLweatherRequest.send();

RLweatherRequest.onload = function () {
    var RLweatherData = JSON.parse(RLweatherRequest.responseText);
    console.log(RLweatherData);

    document.getElementById("RLdeg").innerHTML= RLweatherData.main.temp;
    document.getElementById("RLcurrent-condition").innerHTML= RLweatherData.weather[0].main;
    document.getElementById("RLhumidity").innerHTML= RLweatherData.main.humidity;
    document.getElementById("RLmph").innerHTML= RLweatherData.wind.speed;
    
      /*  var RLiconcode=weatherData.weather[0].icon;
        var RLicon_path= "https://openweathermap.org/img/w/"+ RLiconcode + ".png";
        document.getElementById("RLweather_icon").src= RLicon_path; */
}

/*------------------San Diego--------------------------- */
var SDweatherRequest = new XMLHttpRequest();
var SDapiURL = "http://api.openweathermap.org/data/2.5/weather?id=5391811&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad"

SDweatherRequest.open("GET", SDapiURL, true);
SDweatherRequest.responseType = "text";
SDweatherRequest.send();

SDweatherRequest.onload = function () {
    var SDweatherData = JSON.parse(SDweatherRequest.responseText);
    console.log(SDweatherData);

    document.getElementById("SDdeg").innerHTML= SDweatherData.main.temp;
    document.getElementById("SDcurrent-condition").innerHTML= SDweatherData.weather[0].main;
    document.getElementById("SDhumidity").innerHTML= SDweatherData.main.humidity;
    document.getElementById("SDmph").innerHTML= SDweatherData.wind.speed;
    
      /*  var SDiconcode=weatherData.weather[0].icon;
        var SDicon_path= "https://openweathermap.org/img/w/"+ SDiconcode + ".png";
        document.getElementById("SDweather_icon").src= SDicon_path; */
}