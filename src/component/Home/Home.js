import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import MainScroll from '../MainScroll/MainScroll'
import classes from './Home.module.css'
import LOGO from '../Header/Logo'
import { useHistory } from 'react-router'
const containerVariants = {
	initial: {
		x: '100vw'
	},
	final: {
		x: 0
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' }
	}
}
const Home = () => {
	const history = useHistory()
	useEffect(() => {
		console.log(history)
	}, [])
	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='final'
			exit='exit'
			className={classes.container}
		>
			<div className={classes.background}>
				<div className={classes.One}>
					<LOGO />
				</div>
				<div className={classes.Two}>
					<LOGO />
				</div>{' '}
				<div className={classes.Three}>
					<LOGO />
				</div>
			</div>

			<MainScroll />
		</motion.div>
	)
}

export default Home
