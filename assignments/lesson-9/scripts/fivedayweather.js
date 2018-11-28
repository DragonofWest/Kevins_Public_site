/*-- 5 day weather---*/
/*PRESTON 5 DAY*/
var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

weatherRequest.open("GET", apiURL, true);
weatherRequest.responseType= "text";
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData=JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.getElementById("p-temp1").innerHTML= weatherData.list[6].main.temp_max;
    document.getElementById("p-temp2").innerHTML= weatherData.list[14].main.temp_max;
    document.getElementById("p-temp3").innerHTML= weatherData.list[22].main.temp_max;
    document.getElementById("p-temp4").innerHTML= weatherData.list[30].main.temp_max;
    document.getElementById("p-temp5").innerHTML= weatherData.list[37].main.temp_max;
};

/*SPRING HAVEN 5DAY*/
var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

weatherRequest.open("GET", apiURL, true);
weatherRequest.responseType= "text";
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData=JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.getElementById("ss-temp1").innerHTML= weatherData.list[6].main.temp_max;
    document.getElementById("ss-temp2").innerHTML= weatherData.list[14].main.temp_max;
    document.getElementById("ss-temp3").innerHTML= weatherData.list[22].main.temp_max;
    document.getElementById("ss-temp4").innerHTML= weatherData.list[30].main.temp_max;
    document.getElementById("ss-temp5").innerHTML= weatherData.list[37].main.temp_max;
};


/* FISH HAVEN 5 DAY*/
var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5601299&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

weatherRequest.open("GET", apiURL, true);
weatherRequest.responseType= "text";
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData=JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.getElementById("fh-temp1").innerHTML= weatherData.list[6].main.temp_max;
    document.getElementById("fh-temp2").innerHTML= weatherData.list[14].main.temp_max;
    document.getElementById("fh-temp3").innerHTML= weatherData.list[22].main.temp_max;
    document.getElementById("fh-temp4").innerHTML= weatherData.list[30].main.temp_max;
    document.getElementById("fh-temp5").innerHTML= weatherData.list[37].main.temp_max;
};