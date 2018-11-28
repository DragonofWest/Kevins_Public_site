/*days of the week*/
var day=new Date();
var weekday=new Array(7);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thur";
weekday[5]="Fri";
weekday[6]="Sat";

document.getElementById("tomorrow").innerHTML = weekday[((day.getDay()+ 1)%7)];
document.getElementById("twodays").innerHTML = weekday[((day.getDay() + 2)%7)];
document.getElementById("threedays").innerHTML = weekday[((day.getDay() + 3)%7)];
document.getElementById("fourdays").innerHTML = weekday[((day.getDay() + 4)%7)];
document.getElementById("fivedays").innerHTML = weekday[((day.getDay() + 5)%7)];
