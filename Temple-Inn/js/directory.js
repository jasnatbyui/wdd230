const requestURL = 'https://jasnatbyui.github.io/wdd230/Temple-Inn/data/data.json'
const directories = document.querySelector('.directory');

fetch(requestURL)
.then(function (response) {
    if (!response.ok) {

    } else {
    return response.json();
    }
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(dispayTemples);
});

function dispayTemples(temple) {
    let directory = document.createElement('section');
    let h2Name = document.createElement('h2');
    let h2Address = document.createElement('h2');
    let h2PhNumber = document.createElement('h2');
    let h2Website = document.createElement('h2');
    let h2Email = document.createElement('h2');
    let ulServices = document.createElement('h2');
    let tdTimetable = document.createElement('td');
    let h2Announcement = document.createElement('h2');
    let h2Dedication = document.createElement('h2');
    let h2Ordinance = document.createElement('h2');
    let h2Locale = document.createElement('h2');
    let pFacts1 = document.createElement('h2');
    let pFacts2 = document.createElement('h2');
    let pFacts3 = document.createElement('h2');
    let pFacts4 = document.createElement('h2');
    let screenshot = document.createElement('img', {className: 'bus-img'});

    h2Name.innerHTML = `<span class="businessname">${temple.name}</span>`;
    h2Address.innerHTML = `<span class="address">${temple.address}</span>`;
    h2PhNumber.innerHTML = `<span class="phonenumber">Phone number: ${temple.phonenumber}</span>`;
    h2Website.innerHTML = `<span class="website">Website: ${temple.website}</span>`;
    h2Email.innerHTML = `<span class="email">Email: ${temple.email}</span>`;
    ulServices.innerHTML = `<span class="services">${temple.services}</span>`;
    tdTimetable.innerHTML = `<span class="timetable">${temple.timetable}</span>`;
    h2Announcement.innerHTML = `<span class="announcement">${temple.announcement}</span>`;
    h2Dedication.innerHTML = `<span class="dedication">${temple.dedication}</span>`;
    h2Ordinance.innerHTML = `<span class="ordinance">${temple.ordinancerooms}</span>`;
    h2Locale.innerHTML = `<span class="locale">${temple.locale}</span>`;
    pFacts1.innerHTML = `<span class="facts1">${temple.factsp1}</span>`;
    pFacts2.innerHTML = `<span class="facts2">${temple.factsp2}</span>`;
    pFacts3.innerHTML = `<span class="facts3">${temple.factsp3}</span>`;
    pFacts4.innerHTML = `<span class="facts4">${temple.factsp4}</span>`;


    screenshot.setAttribute('src', temple.imageurl);
    screenshot.setAttribute('alt', `Directory of ${temple.name}`);
    screenshot.setAttribute('loading', 'lazy');

    directory.appendChild(h2Name);
    directory.appendChild(h2Address);
    directory.appendChild(h2PhNumber);
    directory.appendChild(h2Website);
    directory.appendChild(h2Email);
    directory.appendChild(ulServices);
    directory.appendChild(tdTimetable);
    directory.appendChild(h2Announcement);
    directory.appendChild(h2Dedication);
    directory.appendChild(h2Ordinance);
    directory.appendChild(h2Locale);
    directory.appendChild(pFacts1);
    directory.appendChild(pFacts2);
    directory.appendChild(pFacts3);
    directory.appendChild(pFacts4);


    directory.appendChild(screenshot);

    directories.appendChild(directory);
}