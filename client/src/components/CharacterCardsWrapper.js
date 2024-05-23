import React, { useState, useEffect } from 'react';
import Button from './Button';
import CharacterCard from './CharacterCard';
import './css/CardsWrapper.css';

const CharacterCardsWrapper = ({ toggleFunction }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	});

	const sortData = async result => {
		// result.sort((a, b) => a[sortOption[sorting]] - b[sortOption[sorting]]);
		result.sort((a, b) => a['name_key'] - b['name_key']);
		setData(result);
	};

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/info/getcharacterinfo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const result = await response.json();
			sortData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<>
			<div className='block-wrapper character-block-invis' id='character-block-wrapper'>
				<div className='block-body'>
					<div className='save-button-wrapper'>
						<Button onClick={toggleFunction} id='char-save'>Cancel</Button>
					</div>
					<div className='block-flex-body'>
						<div className='block-flex-scroll'>
							<div className='block-flex-wrapper'>
								{data.map(character => (
									<CharacterCard
										key={character.name_key}
										name={character.name}
										rarity={character.rarity}
										element={character.element}
										clickHandler={toggleFunction}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CharacterCardsWrapper;