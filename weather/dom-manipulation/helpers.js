let geocodeAndGetWeather = function(address) {
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      $("#location").html(results[0].formatted_address);
      let lat = results[0].geometry.location.lat();
      let lng = results[0].geometry.location.lng();
      $.ajax({
        type: 'GET',
        url: 'https://api.darksky.net/forecast/52dd0a0afe6b85172771658ff9fb4b3a/' + lat + ',' + lng + '?callback=?',
        dataType: 'jsonp',
        contentType: "application/json",
        success: handleWeatherResponse
      });
    }
  });
}

// given a Darksky Data Point object, returns a Font Awesome icon
let icon = function(dataPoint) {
  switch(dataPoint.icon) {
    case "clear-day":
    case "clear-night":
      return "<i class='fas fa-sun'></i>";
      break;
    case "rain":
      return "<i class='fas fa-tint'></i>";
      break;
    case "wind":
      return "<i class='fab fa-mixcloud'></i>";
      break;
    case "snow":
    case "sleet":
      return "<i class='fas fa-snowflake-o></i>";
      break;
    default:
      return "<i class='fas fa-cloud'></i>";
      break;
  }
}