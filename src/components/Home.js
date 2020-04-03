import React, { useState, useEffect } from 'react';
import {
	API_URL,
	API_KEY,
	API_BASE_URL,
	POSTER_SIZE,
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

const Home = () => {
	const [{ state, loading, error }, fetchMovies] = useHomeFetch();
	console.log(state);
	return (
		<div>
			<HeroImage />
			<SearchBar />
			<Grid />
			<Spinner />
			<MovieThumb />
			<LoadButton />
		</div>
	);
};

export default Home;
