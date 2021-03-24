import { motion } from 'framer-motion'
import React from 'react'

const NotFound = () => {
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
			Aint Got a Page Like THAT HERE BOSS
		</motion.div>
	)
}

export default NotFound
