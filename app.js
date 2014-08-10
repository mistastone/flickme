// 1. Select from a dropdown menu of movie genres

var movieApp = {};

movieApp.key = "7fb7426481eed21217e4ee7dc69256d4";

movieApp.init = function() {
	// CODE FOR DROPDOWN MENU
	// movieApp.getGenre('28');
	// change to .click
	// Click function will run after all user entered criteria has been met
	$('#clickMe').on('click', function(){
		var genre = $('#genre').val();
		var year = $('#searchYear').val();
		var score = $('#searchScore').val();
		// var rating
		// var length
		console.log(year);
		console.log(genre);
		console.log(score);
		$('#genreType').empty();
		// movieApp.getGenre(genre);
		movieApp.getYears(year);
	});
}

// movieApp.getGenre = function(query){
// 	$.ajax ({
// 		url: 'https://api.themoviedb.org/3/genre/'+ query +'/movies',
// 		type: 'GET',
// 		data: {
// 			api_key: movieApp.key
// 			// format: 'jsonp'
// 		},
// 		dataType: 'jsonp',
// 		success: function(result){
// 			console.log(result);
// 			movieApp.displayMovie(result.results);
// 		}
// 	});
// }

movieApp.getYears = function(query){
	var genre = $('#genre').val();
	var score = $('#searchScore').val();
	$.ajax ({
		url: 'https://api.themoviedb.org/3/discover/movie?vote_average='+ score +'&primary_release_year='+ query + '&api_key='+ movieApp.key +'&vote_count.gte=50&with_genres=' + genre,
		// url: 'https://api.themoviedb.org/3/discover/movie?year='+ query ,
		type: 'GET',
		data: {
			api_key: movieApp.key
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
		var thisYear = $('<p>').text(movie.primary_release_year);
		var thisGenre = $('<div>').addClass('movie').append(title, poster, thisYear);
		$('#genreType').append(thisGenre, thisYear);
	});
}

$(function(){
	movieApp.init();
});

// Get genre automatically runs when the drop down is selected
// Don't run on 'change' run '.click'