
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = d.getDate();
        if (day <10)
            day= '0'+ day
    var fdate = days[d.getDay()] +', '+ day +' '+ months[d.getMonth()]+' '+d.getFullYear() ;

    document.getElementById("date").innerHTML=fdate;


