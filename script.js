const rapidApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b31352ba52mshfdeba9aa9f63a55p108bd8jsn3ab160f1ec9f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  const openWeatherMapApiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeatherMap API key
  
  const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;
  
    // Fetch data from RapidAPI
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, rapidApiOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log("RapidAPI response:", response);
        document.getElementById('temp').innerHTML = response.temp;
        // document.getElementById('temp2').innerHTML = response.temp;
        document.getElementById('feels_like').innerHTML = response.feels_like;
        document.getElementById('humidity').innerHTML = response.humidity;
        document.getElementById('humidity2').innerHTML = response.humidity;
        document.getElementById('min_temp').innerHTML = response.min_temp;
        document.getElementById('max_temp').innerHTML = response.max_temp;
        document.getElementById('wind_speed').innerHTML = response.wind_speed;
        document.getElementById('wind_speed2').innerHTML = response.wind_speed;
        document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
        document.getElementById('sunrise').innerHTML = response.sunrise;
        document.getElementById('sunset').innerHTML = response.sunset;
      })
      .catch(err => console.error("Error fetching data from RapidAPI:", err));
  
    // Fetch data from OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`)
      .then((response) => response.json())
      .then((response) => {
        console.log("OpenWeatherMap response:", response);
        // Display OpenWeatherMap data for comparison
        document.getElementById('owm_wind_speed').innerHTML = response.wind.speed;
        document.getElementById('owm_temp').innerHTML = response.main.temp;
        document.getElementById('owm_feels_like').innerHTML = response.main.feels_like;
      })
      .catch(err => console.error("Error fetching data from OpenWeatherMap:", err));
  };
  
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
  });
  
  getWeather('vadodara');
  