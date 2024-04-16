import React, { useState } from 'react';
import Button from './Button';
import MaterialCardsWrapper from './MaterialCardsWrapper';
import CharacterCardsWrapper from './CharacterCardsWrapper';

const Home = () => {
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
				<CharacterCardsWrapper toggleFunction={characterToggle}></CharacterCardsWrapper>
			)}
			{inventoryVisibility && (
				<div className='inventory-block-wrapper' id='inventory-block-wrapper'>
					<MaterialCardsWrapper toggleFunction={materialToggle}></MaterialCardsWrapper>
				</div>
			)}
		</>
	);
};

export default Home;