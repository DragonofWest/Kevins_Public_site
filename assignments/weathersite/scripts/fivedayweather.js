/*-- 5 day weather---*/
/*PRESTON 5 DAY*/
var forecastRequest= new XMLHttpRequest();
var forecastapiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

forecastRequest.open("GET", forecastapiURL, true);
forecastRequest.responseType= "text";
forecastRequest.send();

forecastRequest.onload= function() {
    var forecastData=JSON.parse(forecastRequest.response);
    console.log(forecastData);
    document.getElementById("p-temp1").innerHTML= forecastData.list[6].main.temp_max;
    document.getElementById("p-temp2").innerHTML= forecastData.list[14].main.temp_max;
    document.getElementById("p-temp3").innerHTML= forecastData.list[22].main.temp_max;
    document.getElementById("p-temp4").innerHTML= forecastData.list[30].main.temp_max;
    document.getElementById("p-temp5").innerHTML= forecastData.list[37].main.temp_max;
};

/* Soda SPRING 5DAY*/
var ssforecastRequest= new XMLHttpRequest();
var ssforecastapiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

ssforecastRequest.open("GET", ssforecastapiURL, true);
ssforecastRequest.responseType= "text";
ssforecastRequest.send();

ssforecastRequest.onload= function() {
    var ssforecastData=JSON.parse(ssforecastRequest.response);
    console.log(ssforecastData);
    document.getElementById("ss-temp1").innerHTML= ssforecastData.list[6].main.temp_max;
    document.getElementById("ss-temp2").innerHTML= ssforecastData.list[14].main.temp_max;
    document.getElementById("ss-temp3").innerHTML= ssforecastData.list[22].main.temp_max;
    document.getElementById("ss-temp4").innerHTML= ssforecastData.list[30].main.temp_max;
    document.getElementById("ss-temp5").innerHTML= ssforecastData.list[37].main.temp_max;
};


/* FISH HAVEN 5 DAY*/
var fsforecastRequest= new XMLHttpRequest();
var fsforecastapiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5601299&units=imperial&APPID=93fbe2520d7c4cd0113025de258c34ad";

fsforecastRequest.open("GET", fsforecastapiURL, true);
fsforecastRequest.responseType= "text";
fsforecastRequest.send();

fsforecastRequest.onload= function() {
    var fsforecastData=JSON.parse(fsforecastRequest.response);
    console.log(fsforecastData);
    document.getElementById("fh-temp1").innerHTML= fsforecastData.list[6].main.temp_max;
    document.getElementById("fh-temp2").innerHTML= fsforecastData.list[14].main.temp_max;
    document.getElementById("fh-temp3").innerHTML= fsforecastData.list[22].main.temp_max;
    document.getElementById("fh-temp4").innerHTML= fsforecastData.list[30].main.temp_max;
    document.getElementById("fh-temp5").innerHTML= fsforecastData.list[37].main.temp_max;
};