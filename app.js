// 1. Select from a dropdown menu of movie genres
// 2. Select 

var movieApp = {};

movieApp.key = "7fb7426481eed21217e4ee7dc69256d4";

movieApp.init = function() {
	movieApp.getGenre('drama');
	$('#genre').on('change', function(){
		var genre = $(this).val();
		console.log(genre);
	});
}

movieApp.getGenre = function(query){
	$.ajax ({
		url: 'https://api.themoviedb.org/3/genre/movie/list',
		type: 'GET',
		data: {
			key: movieApp.key,
			format: 'jsonp',
			q: query
		},
		dataType: 'jsonp',
		success: function(result){
			// console.log(result)
			movieApp.displayGenre(result);
		}
	});
}

movieApp.displayMovie = function(data){
	$.each(data, function(i, movie){
		var title = $('<h2>').text(movie.title);
		var thisGenre = $('<div>').addClass('movie').append(title);
		$('#genreType').append(thisGenre);
	});
}

$(function(){
	movieApp.init();
});