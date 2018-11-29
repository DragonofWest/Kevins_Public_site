var townRequest= new XMLHttpRequest();
var apiURL="https://byui-cit230.github.io/weather/data/towndata.json";
townRequest.open("GET", apiURL, true);
townRequest.responseType= "text";
townRequest.send();

townRequest.onload= function() {
   var townInfo=JSON.parse(townRequest.responseText);
   console.log(townInfo);
   document.getElementById("motto").innerHTML= townInfo.towns[4].motto;
    document.getElementById("year-founded").innerHTML= townInfo.towns[4].yearFounded;
    document.getElementById("population").innerHTML= townInfo.towns[4].currentPopulation;
    document.getElementById("annualRainfall").innerHTML= townInfo.towns[4].averageRainfall;

    document.getElementById("motto2").innerHTML= townInfo.towns[5].motto;
    document.getElementById("year-founded2").innerHTML= townInfo.towns[5].yearFounded;
    document.getElementById("population2").innerHTML= townInfo.towns[5].currentPopulation;
    document.getElementById("annualRainfall2").innerHTML= townInfo.towns[5].averageRainfall;

    document.getElementById("motto3").innerHTML= townInfo.towns[1].motto;
    document.getElementById("year-founded3").innerHTML= townInfo.towns[1].yearFounded;
    document.getElementById("population3").innerHTML= townInfo.towns[1].currentPopulation;
    document.getElementById("annualRainfall3").innerHTML= townInfo.towns[1].averageRainfall;

};