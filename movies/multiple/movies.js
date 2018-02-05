// HINTS
//
// The TMDB API returns a "poster_path", which needs to be prepended with "http://image.tmdb.org/t/p/w500/"
// to form the full image URL

window.onload = function() {  // when the page loads
  document.getElementById("find-movie").addEventListener("click", function(event) {  // listen for "click" event on the find-movie button
    let movieTitle = document.getElementById("movie-title").value;
    let url = "http://api.themoviedb.org/3/search/movie?query=" + movieTitle + "&api_key=8ad43d355fccbef40dc3527123bb25ff&language=en-US&page=1&include_adult=false";
    $.get(url, function(data) {
      // make it happen
    });
  });
}