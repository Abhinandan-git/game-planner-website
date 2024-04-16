import React from 'react';
import './css/CharacterCard.css';

const CharacterCard = ({ name, rarity, imageName, element }) => {
	const onClickHandler = () => {}; 

	return (
		<div className='character-card-wrapper' id={name} onClick={() => { onClickHandler(name) }}>
			<div className='character-card-body'>
				<div className='div-transition'>
					<div className='character-wrapper'>
						<div className={`rarity-${rarity} character-image-wrapper`}>
							<div className='character-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/characters/${imageName}`)})` }}></div>
								<div className='element-overlay'>
									<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/ascension_materials/common/elements/${element}.png`)})` }}></div>
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