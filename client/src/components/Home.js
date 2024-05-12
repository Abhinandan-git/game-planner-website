import React, { useState } from 'react';
import Button from './Button';
import MaterialCardsWrapper from './MaterialCardsWrapper';
import CharacterCardsWrapper from './CharacterCardsWrapper';

const Home = () => {
	const [characterVisibility, setCharacterVisibility] = useState(false);
	const [inventoryVisibility, setInventoryVisibility] = useState(false);

	const characterToggle = () => {
		setCharacterVisibility(!characterVisibility);
		if (!characterVisibility) {
			document.getElementById('root').classList.add('noscroll');
		} else {
			document.getElementById('root').classList.remove('noscroll');
		}
	};

	const materialToggle = () => {
		setInventoryVisibility(!inventoryVisibility);
		if (!inventoryVisibility) {
			document.getElementById('root').classList.add('noscroll');
		} else {
			document.getElementById('root').classList.remove('noscroll');
		}
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
				<MaterialCardsWrapper toggleFunction={materialToggle}></MaterialCardsWrapper>
			)}
		</>
	);
};

export default Home;