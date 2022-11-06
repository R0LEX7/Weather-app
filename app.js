// mere constants.....


const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");


// click hone par

search.addEventListener("click", () => 
{
  const APIKey = "185dbcc57e27f9315a49d3f1c762ebd7";
  const city = document.querySelector(".search-box input").value;

//   jab city na mile

  if (city === "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  ).then(response => response.json()).then(json => {

    if (json.cod ==="404"){

        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        
        error404.style.display = "block";
        error404.classList.add("fadeIn")
        return;
    }

    error404.style.display = "none";
    error404.classList.remove("fadeIn");

    // shitt again constants hai🥲🥲


    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    //  yaha hum soochna ke hissab se picture lgate hue
    switch (json.weather[0].main){

        case "Clear":
            image.src = "images/clear.png";
            break;
    
        case "Rain":
            image.src = "images/rain.png";
            break;
    
        case "Snow":
            image.src = "images/snow.png";
            break;
    
        case "Clouds":
            image.src = "images/cloud.png";
            break;
    
    
        case "Few Clouds":
            image.src = "images/cloud.png";
            break;
    
        case "Overcast Clouds":
            image.src = "images/cloud.png";
            break;
    
        case "Haze":
            image.src = "images/mist.png";
            break;

        case "Mist":
            image.src = "images/mist.png";
            break;
    
        default:
            image.src = "";
    }

    // yaha values degi hmari api 
    temperature.innerHTML = `${parseInt(json.main.temp)}<span>&#8451</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

    weatherBox.style.display = "";
    weatherDetails.style.display ="";
    weatherBox.classList.add("fadeIn");
    weatherDetails.classList.add("fadeIn");
    
    container.style.height = "590px";

    
  })
});


//  mere social sites

const linkedIn = () => {
    window.open("https://www.linkedin.com/in/himanshu-kumar-gola-331a671b4/");
}

const github = () => {
    window.open("https://www.linkedin.com/in/himanshu-kumar-gola-331a671b4/");
}