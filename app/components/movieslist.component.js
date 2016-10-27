import React from 'react';

let MoviesList = React.createClass({
	render: function() {
		var movieItems = this.props.movies.results.map(function(movie, index) {
			return (
				<li key={index} className="movie">
					<h4>{movie.title}</h4>
				</li>
			);
		});

		return (
			<div>
				<ul>
				{movieItems}
				</ul>
			</div>
		);
	}
});

export default MoviesList