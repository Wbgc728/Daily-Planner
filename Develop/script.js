// Moment.js
var currentDate = moment().format("dddd MMM Do, YYYY");

// Hour Variables
var nineA = $("#9am");
var tenA = $("#10am");
var elevenA = $("#11am");
var twelveP = $("#12pm");
var oneP = $("#1pm");
var twoP = $("#2pm");
var threeP = $("#3pm");
var fourP = $("#4pm");
var fiveP = $("#5pm");

var hour = moment().hours();
var userInput;
var hourSpan;


// Date and Hour

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' +
        momentNow.format('dddd')
        .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);


// function for local storage
function initialize() {

    console.log("Current Hour " + hour);
    var hour9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineA.val(hour9);

    var hour10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenA.val(hour10);

    var hour11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenA.val(hour11);

    var hour12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelveP.val(hour12);

    var hour13 = JSON.parse(localStorage.getItem("01:00 pm"))
    oneP.val(hour13);

    var hour14 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoP.val(hour14);

    var hour15 = JSON.parse(localStorage.getItem("03:00 pm"))
    threeP.val(hour15);

    var hour16 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourP.val(hour16);

    var hour17 = JSON.parse(localStorage.getItem("05:00 pm"))
    fiveP.val(hour17);

}

// Function to handle changing blocks
function background() {

    $(".form-control").each(function() {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);


        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function() {
    initialize()
    background()

    // Save Buttons for local storage
    $(".saveBtn").on("click", function() {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    })
})