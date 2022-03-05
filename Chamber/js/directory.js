const requestURL = 'https://jasnatbyui.github.io/wdd230/Chamber/data/data.json'
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
    const businesses = jsonObject['businesses'];
    businesses.forEach(dispayBusinesses);
});

function dispayBusinesses(business) {
    let directory = document.createElement('section');
    let h2Name = document.createElement('h2');
    let h2Address = document.createElement('h2');
    let h2PhNumber = document.createElement('h2');
    let h2Website = document.createElement('h2');
    let h2Email = document.createElement('h2');
    let screenshot = document.createElement('img');

    h2Name.innerHTML = `<span class="businessname">${business.name}</span>`;
    h2Address.innerHTML = `<span class="address">${business.address}</span>`;
    h2PhNumber.innerHTML = `<span class="phonenumber">Phone number: ${business.phonenumber}</span>`;
    h2Website.innerHTML = `<span class="website">Website: ${business.website}</span>`;
    h2Email.innerHTML = `<span class="email">Email: ${business.email}</span>`;
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Directory of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    directory.appendChild(h2Name);
    directory.appendChild(h2Address);
    directory.appendChild(h2PhNumber);
    directory.appendChild(h2Website);
    directory.appendChild(h2Email);
    directory.appendChild(screenshot);

    directories.appendChild(directory);
}