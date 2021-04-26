import { DragFeature, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import classes from './Details.module.css'
const contentsBruh = arr => {
	if (arr) {
		return (
			<ul className={classes.list}>
				{/* //loop thorugh data */}
				{arr[0].map((item, index) => (
					<li className={classes.listItems} key={index}>
						{item}
					</li>
				))}
			</ul>
		)
	}
}
const getTotal = (data, price) => {
	const totalSeats = data[0].length
	return (
		<div className={classes.footer}>
			<div>Rs{price}/seat</div>
			<div>TotalSeats: {totalSeats}</div>
		</div>
	)
}
const Details = ({ data, plateNumber, price }) => {
	// const [newData, setNewData] = useState([])
	// useEffect(() => {
	// 	setNewData(data.data[0])
	// })
	const contents = () => (
		<div>
			<h1 className={classes.title}>Van#{plateNumber}</h1>
			{contentsBruh(data)}
			{getTotal(data, price)}
		</div>
	)

	return (
		<div className={classes.container}>
			<div className={classes.loading}>
				<motion.svg
					animate={{
						rotate: [0, 360],
						transition: { repeat: Infinity },
						originX: 0.5
					}}
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect
						x='0.689941'
						y='0.787323'
						width='46.8174'
						height='45.7833'
						transform='rotate(0.858536 0.689941 0.787323)'
						fill='black'
					/>
				</motion.svg>
			</div>
			{/* {console.log(data, plateNumber)} */}
			{data.length > 0 && price && plateNumber ? contents() : null}
		</div>
	)
}

export default Details
