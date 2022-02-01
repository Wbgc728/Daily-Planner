// THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMM Do, YYYY"));

 var currentHour = moment().format("hh");

 console.log(currentHour);
 
 var timeBlockHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
 
for (var i=0; i<=timeBlockHour.length; i++) {

    console.log(timeBlockHour[i]);

 if (currentHour==timeBlockHour[i]) {

 $("div.col-10" ).toggleClass("present")
 
} else if (currentHour<timeBlockHour[i]) {

$("div.col-10").toggleClass("future")

} else {
    $("div.col-10").toggleClass("past");
}
}
