// This code runs when the "Get the weather!" button is clicked
let handleWeatherResponse = function(response) {
  console.log(response)
}

// This code runs when the page loads
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
