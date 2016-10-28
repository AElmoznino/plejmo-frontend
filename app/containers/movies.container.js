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
				this.setState({results: data});
			})
			.catch(function(err) {
				console.log('Fetch error: ', err);
			})
	}

	render() {
		return (
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<h2>Populärast Action</h2>
							<div className="row">
								<MoviesList movies={this.state} />
							</div>
					</div>
				</div>
		)
	}
}

export default MoviesContainer