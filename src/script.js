
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
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
let now = new Date();
let moth = now.getMonth();
let day = now.getDay();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

// let newCity = document.querySelector(".city-search")


// console.log(now.getDate())

time.innerHTML = `${days[day]}, ${months[moth]} ${date}   ${hour}:${minutes}`;

function showTemperature(Response) {
console.log(Response.data.name)
document.querySelector(".city-search").innerHTML = Response.data.name;
document.querySelector(".temperature").innerHTML = Math.round(Response.data.main.temp);
}

function searchCityName(event) {
  event.preventDefault();
  let apiKey = "68dec89f5577f56bb12d71530e92be60";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);


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

form.addEventListener("submit", searchCityName);

let temperature = document.querySelector(".temperature");

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertionFarenheight);
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertionCelsius);
