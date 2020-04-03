import React from 'react';
import Header from './elements/Header.element';
import Home from './Home';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
	return (
		<div>
			<Header />
			<Home />
			<GlobalStyle />
		</div>
	);
};

export default App;
