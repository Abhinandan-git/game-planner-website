import React from 'react';
import MaterialCard from './MaterialCard';
import Button from './Button';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper({ toggleFunction }) {
	return (
		<div className='block-wrapper' id='inventory-block-wrapper'>
			<div className='block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='inven-save'>Save & Close</Button>
				</div>
				<div className='block-flex-body'>
					<div className='block-flex-scroll'>
						<div className='block-flex-wrapper'>
								<MaterialCard
									name="Something"
									defaultValue={0}
									rarity={5}
									imageName="DeadLeyLineLeaves.png"
								></MaterialCard>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MaterialCardsWrapper;