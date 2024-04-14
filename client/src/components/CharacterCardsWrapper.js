import React from 'react';
import Button from './Button';
import './css/CharactersCardsWrapper.css';

const CharacterCardsWrapper = ({ toggleFunction }) => {
	return (
		<>
			<div className='character-block-wrapper character-block-invis' id='character-block-wrapper'>
				<div className='character-block-body'>
					<div className='save-button-wrapper'>
						<Button onClick={toggleFunction} id='char-save'>Cancel</Button>
						{/* <div onClick={setSort}>
							<SortButton _id='char-sort' _class={sortStyle[sorting]} />
						</div> */}
					</div>
					<div className='character-block-flex-body'>
						<div className='character-block-flex-scroll'>
							<div className='character-block-flex-wrapper'>
								Character Blocks
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CharacterCardsWrapper;