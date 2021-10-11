var inputButton = document.querySelector(".inputButton");
var inputValue = document.querySelector(".inputValue");
var dispalyName = document.querySelector(".displayName");
var dispalyDesc = document.querySelector(".displayDesc");
var dispalyTemp = document.querySelector(".displayTemp");

inputButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=f3c496f81311f8dcb56b6afa3cd6e8ec"
  )
    .then((response) => response.json())
    .then((data) => {
      var getNameValue = data["name"];
      var getTempValue = data["main"]["temp"];
      var getDescValue = data["weather"][0]["description"];
      getTempValue = getTempValue - 273.15;

      dispalyName.innerHTML = "City: " + getNameValue;
      dispalyTemp.innerHTML = "Temperature: " + getTempValue + "C";
      dispalyDesc.innerHTML = "Description:" + getDescValue;
    })

    .catch((err) => alert("wrong city name"));
});
