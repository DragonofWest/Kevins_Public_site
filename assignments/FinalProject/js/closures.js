/**Temple Closures **/
var Request= new XMLHttpRequest();
var apiURL="http://DragonofWest/byu-cit230.github.io/assignments/FinalProject/js/tempclose.json";

Request.open("GET" ,apiURL,true);
Request.reponseType="text";
Request.send();

Request.onload= function() {
    var closureData = JSON.parse(Request.response);
    console.log(closureData);
    /** Los Angeles **/
    document.getElementById(la1).innerHTML=closureData.Temples[0].Closed1;
    document.getElementById(la2).innerHTML=closureData.Temples[0].Closed2;
    document.getElementById(la3).innerHTML=closureData.Temples[0].Closed3;
    document.getElementById(la4).innerHTML=closureData.Temples[0].Closed4;
    document.getElementById(la5).innerHTML=closureData.Temples[0].Closed5;
    document.getElementById(la6).innerHTML=closureData.Temples[0].Closed6;
    document.getElementById(la7).innerHTML=closureData.Temples[0].Closed7;
    document.getElementById(la8).innerHTML=closureData.Temples[0].Closed8;
    document.getElementById(la9).innerHTML=closureData.Temples[0].Closed9;
    document.getElementById(la10).innerHTML=closureData.Temples[0].Closed10;
    /** Newport **/
    document.getElementById(np1).innerHTML=closureData.Temples[1].Closed1;
    document.getElementById(np2).innerHTML=closureData.Temples[1].Closed2;
    document.getElementById(np3).innerHTML=closureData.Temples[1].Closed3;
    document.getElementById(np4).innerHTML=closureData.Temples[1].Closed4;
    document.getElementById(np5).innerHTML=closureData.Temples[1].Closed5;
    document.getElementById(np6).innerHTML=closureData.Temples[1].Closed6;
    document.getElementById(np7).innerHTML=closureData.Temples[1].Closed7;
    document.getElementById(np8).innerHTML=closureData.Temples[1].Closed8;
    document.getElementById(np9).innerHTML=closureData.Temples[1].Closed9;
    document.getElementById(np10).innerHTML=closureData.Temples[1].Closed10;
    document.getElementById(np11).innerHTML=closureData.Temples[1].Closed11;
    document.getElementById(np12).innerHTML=closureData.Temples[1].Closed12;
    document.getElementById(np13).innerHTML=closureData.Temples[1].Closed13;
    document.getElementById(np14).innerHTML=closureData.Temples[1].Closed14;
    document.getElementById(np15).innerHTML=closureData.Temples[1].Closed15;
    /** Redlands **/
    document.getElementById(rl1).innerHTML=closureData.Temples[2].Closed1;
    document.getElementById(rl2).innerHTML=closureData.Temples[2].Closed2;
    document.getElementById(rl3).innerHTML=closureData.Temples[2].Closed3;
    document.getElementById(rl4).innerHTML=closureData.Temples[2].Closed4;
    document.getElementById(rl5).innerHTML=closureData.Temples[2].Closed5;
    document.getElementById(rl6).innerHTML=closureData.Temples[2].Closed6;
    document.getElementById(rl7).innerHTML=closureData.Temples[2].Closed7;
    document.getElementById(rl8).innerHTML=closureData.Temples[2].Closed8;
    document.getElementById(rl9).innerHTML=closureData.Temples[2].Closed9;
    document.getElementById(rl10).innerHTML=closureData.Temples[2].Closed10;
    document.getElementById(rl11).innerHTML=closureData.Temples[2].Closed11;
    /** San Diego **/
    document.getElementById(sd1).innerHTML=closureData.Temples[3].Closed1;
    document.getElementById(sd2).innerHTML=closureData.Temples[3].Closed2;
    document.getElementById(sd3).innerHTML=closureData.Temples[3].Closed3;
    document.getElementById(sd4).innerHTML=closureData.Temples[3].Closed4;
    document.getElementById(sd5).innerHTML=closureData.Temples[3].Closed5;
    document.getElementById(sd6).innerHTML=closureData.Temples[3].Closed6;
    document.getElementById(sd7).innerHTML=closureData.Temples[3].Closed7;
    document.getElementById(sd8).innerHTML=closureData.Temples[3].Closed8;
    document.getElementById(sd9).innerHTML=closureData.Temples[3].Closed9;
}