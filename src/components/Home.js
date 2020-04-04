import React, { useState } from 'react';
import {
	POSTER_SIZE,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	SEARCH_BASE_URL,
	POPULAR_BASE_URL
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
	const [searchTerm, setSearchTerm] = useState('');
	const [
		{
			state: { movies, currentPage, heroImage },
			loading,
			error
		},
		fetchMovies
	] = useHomeFetch(searchTerm);

	const searchMovies = search => {
		const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

		setSearchTerm(search);
		fetchMovies(endpoint);
	};

	const loadMoreMovies = () => {
		const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage +
			1}`;
		const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

		const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

		fetchMovies(endpoint);
	};

	if (error) return <div>Something went wrong on our end...</div>;
	if (!movies[0]) return <Spinner />;
	return (
		<div>
			{!searchTerm && (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
					title={heroImage.original_title}
					text={heroImage.overview}
				/>
			)}
			<SearchBar callback={searchMovies} />
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
			{loading && <Spinner />}
			<LoadButton text='Load More' callback={loadMoreMovies} />
		</div>
	);
};

export default Home;
