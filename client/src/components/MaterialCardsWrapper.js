import React, { useState, useEffect } from 'react';
import Button from './Button';
import MaterialCard from './MaterialCard';
import './css/CardsWrapper.css';

function MaterialCardsWrapper({ toggleFunction }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/info/getmaterialinfo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const result = await response.json();
			result.sort((a, b) => a.key - b.key);
			setData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='block-wrapper inventory-block-invis' id='inventory-block-wrapper'>
			<div className='block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='inven-save'>Save & Close</Button>
				</div>
				<div className='block-flex-body'>
					<div className='block-flex-scroll'>
						<div className='block-flex-wrapper'>
							{data.map((item, index) => (
								<MaterialCard
									key={item.key}
									name={item.key}
									defaultValue={0}
									rarity={item.rarity}
									imageName={item.src}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MaterialCardsWrapper;