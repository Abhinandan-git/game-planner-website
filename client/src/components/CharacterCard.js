import React from 'react';
import './css/CharacterCard.css';
import CHARACTERS from './assets/characters/character';
import ELEMENTS from './assets/ascension_materials/common/elements/elements';

const CharacterCard = ({ name, rarity, element, clickHandler }) => {
	const onClickHandler = (name) => {
		clickHandler();
	};

	return (
		<div className='character-card-wrapper' id={name} onClick={() => { onClickHandler(name) }}>
			<div className='character-card-body'>
				<div className='div-transition'>
					<div className='character-wrapper'>
						<div className={`rarity-${rarity} character-image-wrapper`}>
							<div className='character-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${CHARACTERS[name.replace(/\s+/g, '')]})` }}></div>
								<div className='element-overlay'>
									<div className='contained-image' style={{ backgroundImage: `url(${ELEMENTS[element]})` }}></div>
								</div>
							</div>
						</div>
						<div className='character-text-wrapper'>
							<div className='character-text'>{name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharacterCard;