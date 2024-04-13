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

const Buttons = () => {
	return (
		<>
			<div className="header-bar">
				<div className='header-menu-bar'>
					<Button id='chr-add'>Add Character</Button>
					<Button id='inv-mng'>Manage Inventory</Button>
				</div>
			</div>
		</>
	);
};

export { Buttons };
export default Button;