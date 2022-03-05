const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json'
const cards = document.querySelector('.cards');

fetch(requestURL)
.then(function (response) {
    if (!response.ok) {

    } else {
    return response.json();
    }
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(dispayProphets);
});

function dispayProphets(prophet) {
    let card = document.createElement('section');
    let h2Name = document.createElement('h2');
    let h2Birth = document.createElement('h2');
    let h2Place = document.createElement('h2');
    let portrait = document.createElement('img');
    let order = ``;


    // if (prophet.order === 1) {
    //     order = `${prophet.order}first`;
    // }   else if (prophet.order === 2) { 
    //     order = `${prophet.order}nd`;
    // }   else if (prophet.order === 3) {
    //     order = `${prophet.order}rd`;   
    // }   else {
    //     order = `${prophet.order}th`;   
    // }

    switch (prophet.order) {
        case 1:
            order = `${prophet.order}st`;
            break;
        case 2:
            order = `${prophet.order}nd`;
                break;
        case 3:
            order = `${prophet.order}rd`;
            break;
        default:
            order = `${prophet.order}th`;
    }

    h2Name.innerHTML = `<span class="prophetname">${prophet.name}  ${prophet.lastname}</span>`;
    h2Birth.innerHTML = `<span class="datebirth">Date of birth: ${prophet.birthdate}</span>`;
    h2Place.innerHTML = `<span class="birthplace">Place of birth: ${prophet.birthplace}</span>`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2Name);
    card.appendChild(h2Birth);
    card.appendChild(h2Place);
    card.appendChild(portrait);

    cards.appendChild(card);
}
