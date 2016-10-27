import React from 'react';

// Import components
import MoviesList from '../components/movieslist.component';

class MoviesContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: []
		}
	}

	componentDidMount() {
		this.requestMovies();
	}

	requestMovies() {
		fetch('../../movies.json')
			.then((res) => res.json())
			.then((data) => {
				console.log('data: ', data);
				this.setState(data);
			})
			.catch(function(err) {
				console.log('Fetch error: ', err);
			})
	}

	render() {
		return (
			<div>
				<MoviesList movies={this.state} />
			</div>
		)
	}
}

export default MoviesContainer