/* f= 35.74 + 0.6215*t - 35.75*s^0.16 + 0.4275*t*s^0.16   f= windchill in farenhiet t= air temp s= wind speed mph */

function windChill(){
    var tempF= parseFloat(document.getElementById("deg").innerHTML);
    var speed= parseFloat(document.getElementById("mph").innerHTML);
    var factor = Math.round(35.74 + (0.6215*tempF) - (35.75*(Math.pow(speed,0.16))) +( (0.4275*tempF)*(Math.pow(speed,0.16))));
    document.getElementById("output").innerHTML=factor;
    }