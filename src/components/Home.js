import React, { useState } from 'react';
import {
	API_URL,
	API_KEY,
	API_BASE_URL,
	POSTER_SIZE,
	IMAGE_BASE_URL,
	BACKDROP_SIZE
} from '../config';

// import components:
import HeroImage from './elements/HeroImage.element';
import SearchBar from './elements/SearchBar.element';
import Spinner from './elements/Spinner.element';
import MovieThumb from './elements/MovieThumb.element';
import LoadButton from './elements/LoadButton.element';
import Grid from './elements/Grid.element';

// import custom hooks:
import { useHomeFetch } from './hooks/useHomeFetch';

// import custom images:
import NoImage from './images/no_image.jpg';

const Home = () => {
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error
		},
		fetchMovies
	] = useHomeFetch();
	const [searchTerm, setSearchTerm] = useState('');

	if (error) return <div>Something went wrong on our end...</div>;
	if (!movies[0]) return <Spinner />;
	return (
		<div>
			<HeroImage
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
				title={heroImage.original_title}
				text={heroImage.overview}
			/>
			<SearchBar />
			<Grid header={searchTerm ? 'Search Results' : 'Current Favorites'}>
				{movies.map(movie => (
					<MovieThumb
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						movieId={movie.id}
						movieName={movie.original_title}
					/>
				))}
			</Grid>
			<Spinner />
			<MovieThumb />
			<LoadButton />
		</div>
	);
};

export default Home;
