import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadButton = ({ text, callback }) => (
	<StyledLoadMoreBtn type='button' onClick={callback}>
		{text}
	</StyledLoadMoreBtn>
);

LoadButton.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func
};
export default LoadButton;
