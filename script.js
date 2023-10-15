let input = document.getElementById("input");
let search = document.getElementById("search");

search.addEventListener("click", () => {
  checkWeather(input.value);
});
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkWeather(input.value);
  }
});

const apiKey = "cf48f931d73eb99c603898205eb45c31";

async function checkWeather(city) {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  );
  if (!res.ok) {
    alert("invalid city");
  } else {
    var data = await res.json();
  }
  setData(data);
}

const setData = (data) => {
    console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  const img=data.weather[0].main;
  document.querySelector(".weather-icon").src = `/images/${img}.png`;
  

};
