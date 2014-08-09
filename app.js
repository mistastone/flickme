// 1. Select from a dropdown menu of movie genres

var movieApp = {};

movieApp.key = "7fb7426481eed21217e4ee7dc69256d4";

movieApp.init = function() {
	// CODE FOR DROPDOWN MENU
	movieApp.getGenre('28');
	// change to .click
	// Click function will run after all user entered criteria has been met
	$('#genre').on('change', function(){
		var genre = $(this).val();
		// var rating
		// var length
		// console.log(genre);
		$('#genreType').empty();
		movieApp.getGenre(genre);
	});
}

movieApp.getGenre = function(query){
	$.ajax ({
		url: 'https://api.themoviedb.org/3/genre/'+ query +'/movies',
		type: 'GET',
		data: {
			api_key: movieApp.key
			// format: 'jsonp'
		},
		dataType: 'jsonp',
		success: function(result){
			console.log(result);
			movieApp.displayMovie(result.results);
		}
	});
}

movieApp.displayMovie = function(data){
	$.each(data, function(i, movie){
		console.log(movie.title);
		var title = $('<h2>').text(movie.title);
		var poster = $('<img>').attr('src', 'http://image.tmdb.org/t/p/w396/' + movie.poster_path);
		var thisGenre = $('<div>').addClass('movie').append(title, poster);
		$('#genreType').append(thisGenre);
	});
}

$(function(){
	movieApp.init();
});

// Get genre automatically runs when the drop down is selected
// Don't run on 'change' run '.clicj'