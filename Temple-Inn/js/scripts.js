
// hamburger in header
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu; //When user clicks x(hamburgerBtn)...


// set current date in header
// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

let weekDay;
// Assign the to the day of the week ( hint: getDay() )
weekDay = now.getDay();
// Declare a variable to hold a message that will be displayed
let message;
// Using an if statement, if the day of the week is Monday or Tuesday, set a message
if (weekDay >= 1 && weekDay <= 2) {
    message = '🤝🏼 Come join us for the chamber meet and greet this Wednesday at 7:00 p.m.!';
}
// Using an else statement, set the message variable to set another message
else {
   message = '🤝🏼 Come join us next Wednesday at 7:00 p.m. for the chamber meet and greet!';
}

// OUTPUT
// Assign the value of the message variable to the HTML element with an ID of message, following the if block. 
document.querySelector('#message').textContent = message;


 //   function myFunction()

//.style.display = "block"
//Date() object and getDay() method (Links to an external site.)
var count = 5;
var redirect = "thanks.html";
function countDown(){
var timer = document.getElementById("timer");
if(count > 0){
count--;
timer.innerHTML = "This page will redirect in "+count+" seconds.";
setTimeout("countDown()", 1000);
}else{
window.location.href = redirect;
}
}
countDown();

// Header date

let headerDateBox = document.getElementById("display-date");
let meetGreet = document.getElementById("meetgreet");

headerDate();

function headerDate(){
    requestedFormat = Intl.DateTimeFormat("en", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    console.log(requestedFormat.format(Date.now()));
    if (day == 1 || day == 2){
        headerDateBox.append(requestedFormat.format(Date.now()));
        meetGreet.append(`🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`);
    }
    else{
        headerDateBox.classList.add("hide");
        meetGreet.classList.add("hide");
    }
}
