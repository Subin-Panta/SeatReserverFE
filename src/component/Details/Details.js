import { motion } from 'framer-motion'
import React from 'react'
import classes from './Details.module.css'
const Details = () => {
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
						fill='#2988F8'
					/>
				</motion.svg>
			</div>
		</div>
	)
}

export default Details
