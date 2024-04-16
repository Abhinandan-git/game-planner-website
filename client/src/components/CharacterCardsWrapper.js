import React from 'react';
import Button from './Button';
import CharacterCard from './CharacterCard';
import './css/CharactersCardsWrapper.css';

const CharacterCardsWrapper = ({ toggleFunction }) => {
	return (
		<>
			<div className='character-block-wrapper character-block-invis' id='character-block-wrapper'>
				<div className='character-block-body'>
					<div className='save-button-wrapper'>
						<Button onClick={toggleFunction} id='char-save'>Cancel</Button>
					</div>
					<div className='character-block-flex-body'>
						<div className='character-block-flex-scroll'>
							<div className='character-block-flex-wrapper'>
								<CharacterCard
									name="Amber"
									rarity={4}
									imageName="Amber.png"
									element="Pyro"
								></CharacterCard>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CharacterCardsWrapper;