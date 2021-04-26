import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WithErrorHandler from '../hoc/WithErrorHandler'
import Interior from '../Interior/Interior'
import classes from './MainScroll.module.css'
//as soon as component mounts get data of 3 vans max at a time

const MainScroll = () => {
	const [vanData, setVanData] = useState([])
	useEffect(() => {
		const availableData = async () => {
			try {
				const Data = await axios.get('/van/getData')
				const spread = Data.data.data
				setVanData([...vanData, ...spread])
				return Data
			} catch (error) {
				console.log(error)
			}
		}
		availableData()

		//Hit the endpoint that gets the data
	}, [])
	return (
		<div className={classes.container}>
			{/* Loop Over the array and pass available and plateNumber */}
			{vanData.map(item => {
				//construct the avaiable array
				const available = []
				if (item.seat1) {
					available.push('seat1')
				}
				if (item.seat2) {
					available.push('seat2')
				}
				if (item.seat3) {
					available.push('seat3')
				}
				if (item.seat4) {
					available.push('seat4')
				}
				if (item.seat5) {
					available.push('seat5')
				}
				if (item.seat6) {
					available.push('seat6')
				}
				if (item.seat7) {
					available.push('seat7')
				}
				if (item.seat8) {
					available.push('seat8')
				}
				if (item.seat9) {
					available.push('seat9')
				}
				if (item.seat10) {
					available.push('seat10')
				}
				if (item.seat11) {
					available.push('seat11')
				}
				if (item.seat12) {
					available.push('seat12')
				}
				if (item.seat13) {
					available.push('seat13')
				}
				if (item.seat14) {
					available.push('seat14')
				}
				if (item.seat15) {
					available.push('seat15')
				}
				if (item.seat16) {
					available.push('seat16')
				}
				if (item.seat17) {
					available.push('seat17')
				}
				return (
					<Interior
						available={available}
						plateNumber={item.plateNumber}
						price={item.price}
					/>
				)
			})}
			{/* <Interior
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
				plateNumber=''
			/>
			<Interior available={['seat8', 'seat15']} plateNumber='' />
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
				plateNumber=''
			/> */}
		</div>
	)
}

export default WithErrorHandler(MainScroll, axios)
