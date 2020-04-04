// import libraries:
import React from 'react';

// import components:
import Navigation from '../components/elements/Navigation.element';
import MovieInfo from '../components/elements/MovieInfo.element';
import MovieInfoBar from '../components/elements/MovieInfoBar.element';
import Actor from '../components/elements/Actor.elemenent';
import Grid from '../components/elements/Grid.element';
import Spinner from '../components/elements/Spinner.element';

// import custom hooks:
import { useMovieFetch } from '../components/hooks/useMovieFetch';

const Movie = ({ movieId }) => {
	const [movie, loading, error] = useMovieFetch(movieId);
	// console.log(movie);

	if (error) return <div>Something went wrong on our end...</div>;
	if (loading) return <Spinner />;

	return (
		<div>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar />
			<Grid>
				<Actor />
			</Grid>
		</div>
	);
};

export default Movie;
