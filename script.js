let input = document.getElementById("input-val");
let btn = document.getElementById("btn");
let tempValue = document.getElementById("temp-val");
let tempType = document.getElementById("temp-type");
let error = document.getElementById("error");
let humidity = document.getElementById("humidity-val");
let speed = document.getElementById("speed-val");

btn.addEventListener("click", function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=ff092519bc84a7badf9349529e5ce1d5"
    )
        .then((response) => response.json())
        .then((data) => {
            tempValue.innerText = `${data.main.temp}Deg`;
            tempType.innerText = `${data.weather[0].description}`;
            humidity.innerText = `${data.main.humidity}%`;
            speed.innerText = `${data.wind.speed}Km/Hours`;
        })
        .catch((error) => {
            console.log("Enter Correct City Name");
            error.innerText = "Error 404! Not Found"
        })
})