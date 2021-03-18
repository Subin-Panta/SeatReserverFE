import { motion } from 'framer-motion'
import React from 'react'
import MainScroll from '../MainScroll/MainScroll'
import classes from './Home.module.css'
const containerVariants = {
	initial: {
		opacity: 0
	},
	final: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.7
		}
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' }
	}
}
const Home = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='final'
			exit='exit'
		>
			<MainScroll />
		</motion.div>
	)
}

export default Home