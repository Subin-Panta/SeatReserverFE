import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import classes from './Modal.module.css'
const modalvariants = {
	initial: {
		y: '-100vh'
	},
	final: {
		y: 0,
		transition: {
			type: 'spring',
			delay: 1.2
		}
	}
}
const backDropVariants = {
	initial: {
		opacity: 0
	},
	final: {
		opacity: 1,
		transition: {
			type: 'spring',
			delay: 1
		}
	}
}
const Modal = props => {
	return (
		<div>
			<motion.div
				variants={backDropVariants}
				initial='initial'
				animate='final'
				className={classes.backDrop}
				onClick={props.clickHandler}
			></motion.div>
			<motion.div
				variants={modalvariants}
				initial='initial'
				animate='final'
				className={classes.modal}
			>
				{props.children}
			</motion.div>
		</div>
	)
}

export default Modal
