import React from 'react';
import ReactDOM from 'react-dom';

import MoviesContainer from './containers/movies.container';

class App extends React.Component {
	render() {
		return (
			<div>
				<MoviesContainer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('movies')
);