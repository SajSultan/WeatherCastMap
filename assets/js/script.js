// create variable for api key
// create variable for url api call.
// variable for geocoding api call if diff..
// variable for current/daily forcast div 
// create variable for 5 day forcast single time of day for each 
// create bootstrap buttons div
// create function to append create city by historical data buttons dynamically .  

// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

const APIKey = "20022a5186516909b5b3aa143967e8fe";
const searchButton = document.getElementById("#search-button");
const searchInput = document.getElementById("#search-input");
const clearInput = document.getElementById("#clear-input");

const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + APIKey;





// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    function forecastCards(cityName, date, weatherIcon, humidity, windSpeed) {
        const fcard = $()
    }

    // // Transfer content to HTML
    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    
    // // Convert the temp to Celsius
    // var tempC = response.main.temp - 273.15;

    // // add temp content to html
    // $(".temp").text("Temperature (K) " + response.main.temp);
    // $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (C): " + tempC);
  });