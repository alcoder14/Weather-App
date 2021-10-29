const input = document.querySelector("#city-name");
const btn = document.querySelector("#request");

btn.addEventListener("click", validate);
function validate(){
    let place = input.value;
    requestAPI(place)
}

const api_key = "3fe02b212c365e5681c1a1192f87ab22";
let succesfull = false;

const requestAPI = async (city) =>{

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    try{
        const response = await fetch(url);
        console.log(response)
        const dataJSON = await response.json();
        console.log(dataJSON);
        succesfull = true;
        getWeatherData(dataJSON);   
    } catch(err){
        //console.log(err);
    }
}

let request_counter = 0;

// Hide Data Table 
const data_container = document.querySelector("#data-container");
data_container.style.display = "none";

const no_data = document.querySelector("#no-data");
no_data.style.display = "flex";

let place_name = document.querySelector("#name")
let weather = document.querySelector("#weather")
let temperature = document.querySelector("#temperature")
let feels_like = document.querySelector("#feels_like")
let wind_speed = document.querySelector("#wind_speed")
let humidity = document.querySelector("#humidity");
let weather_icon = document.querySelector("#weather_icon")

function getWeatherData(info){
    if(input.value != "" && info.cod != 404){
        no_data.style.display = "none";
        data_container.style.display = "grid";
    } else {
        no_data.style.display = "flex";
        data_container.style.display = "none";
    }
    input.value = "";
    /*
    request_counter++;
    if(request_counter == 1){
        data_container.style.display = "grid";
        no_data.style.display = "none";
    }
    */
    let city = info.name;
    let country = info.sys.country;
    place_name.innerHTML = city + ", " + country;
    let weather_type = info.weather[0].main;
    weather.innerHTML = weather_type;
    let temp = info.main.temp;
    temperature.innerHTML = temp + "°C"; 
    let realfeel = info.main.feels_like;
    feels_like.innerHTML = realfeel + "°C";
    let wind_speed_info = info.wind.speed;
    wind_speed.innerHTML = Math.floor(wind_speed_info) + " kmph"; 
    let humidity_info = info.main.humidity;
    humidity.innerHTML = humidity_info;

    let iconcode = info.weather[0].icon;
    let icon_url = "http://openweathermap.org/img/w/" + iconcode + ".png";
    weather_icon.src = icon_url;
}

/*
const loadData = async () =>{
    try{
        const url = `https://jsonplaceholder.typicode.com/todos/1`;
        const res = await fetch(url) // Počaka, da naredi fetch request in shrani response v spemenljivko
        const json = await res.json()
        console.log(json);
        const html = `
            <div>
                <p>Completed: ${json.title}</p>
            </div>
            `;
        
        console.log(html)
        const output = document.querySelector("#app");
        output.insertAdjacentHTML('afterend', html)

    } catch(err) {
        console.log(err);
    }
}

loadData();
*/

const arrayOfImages = ["PartlyCloudy.jpg", "Rainy.jpg", "Snowy.jpg", "Stormy.jpg"];
const root = "Images/"

const body = document.querySelector("body");
let randomIndex = Math.floor(Math.random() * arrayOfImages.length);

function loadImage(){
    body.style.backgroundImage = 'url('+ root + arrayOfImages[randomIndex] + ')';
}
loadImage()
