import React from 'react';
import './css/Button.css';

const Button = ({ onClick, id, children }) => {
	return (
		<button onClick={onClick} className='rect-button' id={id}>
			<div className='rect-button-inner' />
			<div className='rect-button-border' />
			<div className='rect-button-label'>{children}</div>
		</button>
	);
}

export default Button;