var _0xec7c=["\x23\x63\x69\x74\x79\x2D\x6E\x61\x6D\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x23\x72\x65\x71\x75\x65\x73\x74","\x63\x6C\x69\x63\x6B","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x33\x66\x65\x30\x32\x62\x32\x31\x32\x63\x33\x36\x35\x65\x35\x36\x38\x31\x63\x31\x61\x31\x31\x39\x32\x66\x38\x37\x61\x62\x32\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6F\x70\x65\x6E\x77\x65\x61\x74\x68\x65\x72\x6D\x61\x70\x2E\x6F\x72\x67\x2F\x64\x61\x74\x61\x2F\x32\x2E\x35\x2F\x77\x65\x61\x74\x68\x65\x72\x3F\x71\x3D","\x26\x75\x6E\x69\x74\x73\x3D\x6D\x65\x74\x72\x69\x63\x26\x61\x70\x70\x69\x64\x3D","","\x6C\x6F\x67","\x6A\x73\x6F\x6E","\x23\x64\x61\x74\x61\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x6E\x6F\x6E\x65","\x23\x6E\x6F\x2D\x64\x61\x74\x61","\x66\x6C\x65\x78","\x23\x6E\x61\x6D\x65","\x23\x77\x65\x61\x74\x68\x65\x72","\x23\x74\x65\x6D\x70\x65\x72\x61\x74\x75\x72\x65","\x23\x66\x65\x65\x6C\x73\x5F\x6C\x69\x6B\x65","\x23\x77\x69\x6E\x64\x5F\x73\x70\x65\x65\x64","\x23\x68\x75\x6D\x69\x64\x69\x74\x79","\x23\x77\x65\x61\x74\x68\x65\x72\x5F\x69\x63\x6F\x6E","\x63\x6F\x64","\x67\x72\x69\x64","\x6E\x61\x6D\x65","\x63\x6F\x75\x6E\x74\x72\x79","\x73\x79\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x2C\x20","\x6D\x61\x69\x6E","\x77\x65\x61\x74\x68\x65\x72","\x74\x65\x6D\x70","\xB0\x43","\x66\x65\x65\x6C\x73\x5F\x6C\x69\x6B\x65","\x73\x70\x65\x65\x64","\x77\x69\x6E\x64","\x66\x6C\x6F\x6F\x72","\x20\x6B\x6D\x70\x68","\x68\x75\x6D\x69\x64\x69\x74\x79","\x69\x63\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x6F\x70\x65\x6E\x77\x65\x61\x74\x68\x65\x72\x6D\x61\x70\x2E\x6F\x72\x67\x2F\x69\x6D\x67\x2F\x77\x2F","\x2E\x70\x6E\x67","\x73\x72\x63","\x50\x61\x72\x74\x6C\x79\x43\x6C\x6F\x75\x64\x79\x2E\x6A\x70\x67","\x52\x61\x69\x6E\x79\x2E\x6A\x70\x67","\x53\x6E\x6F\x77\x79\x2E\x6A\x70\x67","\x53\x74\x6F\x72\x6D\x79\x2E\x6A\x70\x67","\x57\x65\x61\x74\x68\x65\x72\x2D\x61\x70\x70\x2D\x49\x6D\x61\x67\x65\x73\x2F","\x62\x6F\x64\x79","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x75\x72\x6C\x28","\x29"];const input=document[_0xec7c[1]](_0xec7c[0]);const btn=document[_0xec7c[1]](_0xec7c[2]);btn[_0xec7c[4]](_0xec7c[3],validate);function validate(){let _0x4c4fx4=input[_0xec7c[5]];requestAPI(_0x4c4fx4)}const api_key=_0xec7c[6];let succesfull=false;const requestAPI=async (_0x4c4fx8)=>{let _0x4c4fx9=`${_0xec7c[7]}${_0x4c4fx8}${_0xec7c[8]}${api_key}${_0xec7c[9]}`;try{const _0x4c4fxa= await fetch(_0x4c4fx9);console[_0xec7c[10]](_0x4c4fxa);const _0x4c4fxb= await _0x4c4fxa[_0xec7c[11]]();console[_0xec7c[10]](_0x4c4fxb);succesfull= true;getWeatherData(_0x4c4fxb)}catch(err){}};let request_counter=0;const data_container=document[_0xec7c[1]](_0xec7c[12]);data_container[_0xec7c[14]][_0xec7c[13]]= _0xec7c[15];const no_data=document[_0xec7c[1]](_0xec7c[16]);no_data[_0xec7c[14]][_0xec7c[13]]= _0xec7c[17];let place_name=document[_0xec7c[1]](_0xec7c[18]);let weather=document[_0xec7c[1]](_0xec7c[19]);let temperature=document[_0xec7c[1]](_0xec7c[20]);let feels_like=document[_0xec7c[1]](_0xec7c[21]);let wind_speed=document[_0xec7c[1]](_0xec7c[22]);let humidity=document[_0xec7c[1]](_0xec7c[23]);let weather_icon=document[_0xec7c[1]](_0xec7c[24]);function getWeatherData(_0x4c4fx17){if(input[_0xec7c[5]]!= _0xec7c[9]&& _0x4c4fx17[_0xec7c[25]]!= 404){no_data[_0xec7c[14]][_0xec7c[13]]= _0xec7c[15];data_container[_0xec7c[14]][_0xec7c[13]]= _0xec7c[26]}else {no_data[_0xec7c[14]][_0xec7c[13]]= _0xec7c[17];data_container[_0xec7c[14]][_0xec7c[13]]= _0xec7c[15]};input[_0xec7c[5]]= _0xec7c[9];let _0x4c4fx8=_0x4c4fx17[_0xec7c[27]];let _0x4c4fx18=_0x4c4fx17[_0xec7c[29]][_0xec7c[28]];place_name[_0xec7c[30]]= _0x4c4fx8+ _0xec7c[31]+ _0x4c4fx18;let _0x4c4fx19=_0x4c4fx17[_0xec7c[33]][0][_0xec7c[32]];weather[_0xec7c[30]]= _0x4c4fx19;let _0x4c4fx1a=_0x4c4fx17[_0xec7c[32]][_0xec7c[34]];temperature[_0xec7c[30]]= _0x4c4fx1a+ _0xec7c[35];let _0x4c4fx1b=_0x4c4fx17[_0xec7c[32]][_0xec7c[36]];feels_like[_0xec7c[30]]= _0x4c4fx1b+ _0xec7c[35];let _0x4c4fx1c=_0x4c4fx17[_0xec7c[38]][_0xec7c[37]];wind_speed[_0xec7c[30]]= Math[_0xec7c[39]](_0x4c4fx1c)+ _0xec7c[40];let _0x4c4fx1d=_0x4c4fx17[_0xec7c[32]][_0xec7c[41]];humidity[_0xec7c[30]]= _0x4c4fx1d;let _0x4c4fx1e=_0x4c4fx17[_0xec7c[33]][0][_0xec7c[42]];let _0x4c4fx1f=_0xec7c[43]+ _0x4c4fx1e+ _0xec7c[44];weather_icon[_0xec7c[45]]= _0x4c4fx1f}const arrayOfImages=[_0xec7c[46],_0xec7c[47],_0xec7c[48],_0xec7c[49]];const root=_0xec7c[50];const body=document[_0xec7c[1]](_0xec7c[51]);let randomIndex=Math[_0xec7c[39]](Math[_0xec7c[52]]()* arrayOfImages[_0xec7c[53]]);function loadImage(){body[_0xec7c[14]][_0xec7c[54]]= _0xec7c[55]+ root+ arrayOfImages[randomIndex]+ _0xec7c[56]}loadImage()


/*
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

const arrayOfImages = ["PartlyCloudy.jpg", "Rainy.jpg", "Snowy.jpg", "Stormy.jpg"];
const root = "Weather-app-Images/"

const body = document.querySelector("body");
let randomIndex = Math.floor(Math.random() * arrayOfImages.length);

function loadImage(){
    body.style.backgroundImage = 'url('+ root + arrayOfImages[randomIndex] + ')';
}
loadImage()
*/
