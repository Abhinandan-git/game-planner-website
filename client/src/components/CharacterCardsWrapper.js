import React from 'react';
import Button from './Button';
import CharacterCard from './CharacterCard';
import './css/CharactersCardsWrapper.css';

const CharacterCardsWrapper = ({ toggleFunction }) => {
	return (
		<>
			<div className='block-wrapper' id='character-block-wrapper'>
				<div className='block-body'>
					<div className='save-button-wrapper'>
						<Button onClick={toggleFunction} id='char-save'>Cancel</Button>
					</div>
					<div className='block-flex-body'>
						<div className='block-flex-scroll'>
							<div className='block-flex-wrapper'>
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