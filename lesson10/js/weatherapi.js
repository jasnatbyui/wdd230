const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=89b4214116897924b239e049dc7248a2";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#weathericon');
    const caption = document.querySelector('figcaption');
    const speed = document.querySelector('#windspeed');

    // let currentTemps = jsObject.main.temp;
    // let wspeed = jsObject.wind.speed;

    document.querySelector('#windspeed').textContent = speed;
    speed.textContent = jsObject.main.temp.toFixed(1);

    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let imgalt = jsObject.weather[0].description;
    imgalt = imgalt.split(' ').map(capitalize).join(" ");

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
        caption.innerHTML = imgalt;

      
 function capitalize(word) {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
  });