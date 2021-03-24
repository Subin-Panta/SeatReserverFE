import React from 'react'
import Interior from '../Interior/Interior'
import classes from './MainScroll.module.css'
//as soon as component mounts get data of 3 vans max at a time

const MainScroll = () => {
	return (
		<div className={classes.container}>
			<Interior
				available={[
					'seat1',
					'seat2',
					'seat3',
					'seat4',
					'seat5',
					'seat6',
					'seat7',
					'seat16',
					'seat9',
					'seat10',
					'seat8',
					'seat15'
				]}
			/>
			<Interior available={['seat8', 'seat15']} />
			<Interior
				available={[
					'seat1',
					'seat2',
					'seat3',
					'seat4',
					'seat5',
					'seat6',
					'seat7',
					'seat8',
					'seat9',
					'seat10',
					'seat11',
					'seat12',
					'seat13',
					'seat14',
					'seat15',
					'seat16',
					'seat17'
				]}
			/>
		</div>
	)
}

export default MainScroll
