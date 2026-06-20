async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "a69621d4633ca49ef4e7a749472e6d98";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById("result").innerHTML =
      `Temperature: ${data.main.temp} °C`;
  }
  catch (error) {
    document.getElementById("result").innerHTML =
      "Error occurred";
  }
}