
let months = [
'January', 
'February', 
'March', 
'April', 
'May', 
'June', 
'July', 
'August', 
'September', 
'October', 
'November', 
'December']
let days = [
    "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let time = document.querySelector(".time");
let now = new Date()
let moth = now.getMonth();
let day = now.getDay()
let date = now.getDate()
let hour = now.getHours()
let minutes = now.getMinutes()

// console.log(now.getDate())

time.innerHTML=`${days[day]}, ${months[moth]} ${date}   ${hour}:${minutes}`

function searchCityName(event){
    event.preventDefault()
    let searchInput = document.querySelector("#search-text-input");
    console.log(searchInput.value)
    let newCity = document.querySelector(".city-search");
    newCity.innerHTML = `${searchInput.value}`
    // cityName.innerHTML = 
}

function convertionCelsius(event) {
    event.preventDefault();
    temperature.innerHTML = "24  ";
}

function convertionFarenheight(event) {
  event.preventDefault();
  temperature.innerHTML = "75   ";
}
let form = document.querySelector(".form-control");
// console.log(form)

form.addEventListener("submit", searchCityName)

let temperature = document.querySelector(".temperature");


let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertionFarenheight);
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertionCelsius);
