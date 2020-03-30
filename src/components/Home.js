import React from 'react';

// import components:
import HeroImage from './elements/heroImage.element';
import SearchBar from './elements/searchBar.element';
import Spinner from './elements/spinner.element';
import MovieThumb from './elements/movieThumb.element';
import LoadButton from './elements/loadButton.element';
import Header from './elements/header.element';
import Grid from './elements/grid.element';

const Home = () => (
	<div>
		<Header />
		<HeroImage />
		<SearchBar />
		<Grid />
		<Spinner />
		<MovieThumb />
		<LoadButton />
	</div>
);

export default Home;
