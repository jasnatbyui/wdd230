
// hamburger in header
function togglemenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = togglemenu;

// set current date in header
    const currentYear = new Date();

    let month = currentDate.getMonth();
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;  
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:    
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    let day = currentDate.getDay();
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    let date = `${day}, ${currentYear.getDate()} ${month} ${currentDate.getFullYear()}`;
    document.querySelector('#date').innerHTML = date;

// Shows banner on certain days of the week
    if (day === "Monday" || day === "Tuesday") {
        document.querySelector(".banner").style.visibility = "visible";
    }

    else {
        document.querySelector(".banner").style.display = "none";
    }

    document.querySelector(".banner__close").addEventListener("click", function () {
        this.closest(".banner").style.display = "none";
    });




// select the elements to manipulate (output to)
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const d = new Date();
let day = d.getDay()
    if (day < 4) {
        document.getElementById("banner-content").style.display = "block";
}


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

