import React from 'react';

let MoviesList = React.createClass({
	render: function() {
		console.log("props: ", this.props);
		var movieItems = this.props.movies.results.map(function(movie) {
			return (
				<div key={movie.id} className="col-xs-6 col-md-3 movie">
					<a href="https://www.plejmo.com/sv/film/$`{movie.id}`/$`{movie.title}`">
					<img alt="{movie.title}" src={movie.picture} />
					</a>
					<div className="movie-details">
						<a href="https://www.plejmo.com/sv/film/15584/deadpool"><h4>{movie.title}</h4></a>
						<span>Action</span>
						<div className="movie-stars pull-right">
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star" aria-hidden="true"></i>
							<i className="fa fa-star-half-empty" aria-hidden="true"></i>
						</div>
					</div>
					<span className="movie-price">
						<a href="https://www.plejmo.com/sv/film/15584/deadpool">Kolla {movie.price} kr</a>
					</span>
				</div>
			);
		});

		return (
			<div>
				{movieItems}
			</div>
		);
	}
});

export default MoviesList