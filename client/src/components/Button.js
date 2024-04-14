import React, { useState } from 'react';
// import MaterialCardsWrapper from './MaterialCardsWrapper';
	import CharacterCardsWrapper from './CharacterCardsWrapper';
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

const MainButtons = () => {
	const [characterVisibility, setCharacterVisibility] = useState(false);
	const [inventoryVisibility, setInventoryVisibility] = useState(false);

	const characterToggle = () => {
		setCharacterVisibility(!characterVisibility);
	};

	const materialToggle = () => {
		setInventoryVisibility(!inventoryVisibility);
	}

	return (
		<>
			<div className="header-bar">
				<div className='header-menu-bar'>
					<Button onClick={characterToggle} id='chr-add'>Add Character</Button>
					<Button onClick={materialToggle} id='inv-mng'>Manage Inventory</Button>
				</div>
			</div>
			{characterVisibility && (
				<div className='character-block-wrapper character-block-invis' id='character-block-wrapper'>
					<CharacterCardsWrapper toggleFunction={characterToggle}></CharacterCardsWrapper>
				</div>
			)}
			{inventoryVisibility && (
				<div className='inventory-block-wrapper' id='inventory-block-wrapper'>
					{/* <MaterialCardsWrapper toggleFunction={materialToggle}></MaterialCardsWrapper> */}
					Materials
				</div>
			)}
		</>
	);
};

export { MainButtons };
export default Button;