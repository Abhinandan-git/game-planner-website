import React, { useState } from 'react';
import Button from './Button';
import MaterialCardsWrapper from './MaterialCardsWrapper';
import CharacterCardsWrapper from './CharacterCardsWrapper';
import Links from './Links';
import '../index.css';

const Home = () => {
	const [characterVisibility, setCharacterVisibility] = useState(false);
	const [inventoryVisibility, setInventoryVisibility] = useState(false);

	const characterToggle = () => {
		setCharacterVisibility(!characterVisibility);
		if (!characterVisibility) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('character-block-wrapper').classList.remove('character-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('character-block-wrapper').classList.add('character-block-invis');
		}
	};

	const materialToggle = () => {
		setInventoryVisibility(!inventoryVisibility);
		if (!inventoryVisibility) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('inventory-block-wrapper').classList.remove('inventory-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('inventory-block-wrapper').classList.add('inventory-block-invis');
		}
	}

	return (
		<>
			<div className="header-bar">
				<div className='header-menu-bar'>
					<Button onClick={characterToggle} id='chr-add'>Add Character</Button>
					<Button onClick={materialToggle} id='inv-mng'>Manage Inventory</Button>
					<Links />
				</div>
			</div>
			<CharacterCardsWrapper toggleFunction={characterToggle}></CharacterCardsWrapper>
			<MaterialCardsWrapper toggleFunction={materialToggle}></MaterialCardsWrapper>
		</>
	);
};

export default Home;