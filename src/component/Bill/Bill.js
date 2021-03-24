import { motion } from 'framer-motion'
import React from 'react'
import Details from '../Details/Details'
import Form from '../Form/Form'
import classes from './Bill.module.css'
const Bill = () => {
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
	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='final'
			exit='exit'
		>
			<div className={classes.formContainer}>
				<Form />
			</div>
			<div className={classes.detailContainer}>
				<Details />
			</div>
		</motion.div>
	)
}

export default Bill
