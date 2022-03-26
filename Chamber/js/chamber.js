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