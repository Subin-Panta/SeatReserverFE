import React, { useEffect, useState } from 'react'
import classes from './Interior.module.css'
import { motion } from 'framer-motion'
const svgVariants = {
	initial: {
		scale: 0
	},
	final: {
		scale: 1,
		transition: {
			duration: 5,
			type: 'spring',
			damping: 4,
			ease: 'easeInOut'
		}
	},
	whileHover: {
		scale: 1.15,

		cursor: 'pointer'
	},
	whileTap: {
		scale: 0.9,
		rotate: 360,
		transition: {
			duration: 0.5
		}
	}
}
const select = '#00ff2a'
const notSelected = '#FFF7F7'
const notAvailable = '#ff0000'
const Interior = ({ available }) => {
	const [seat, setSeat] = useState({
		seat1: false,
		seat2: false,
		seat3: false,
		seat4: false,
		seat5: false,
		seat6: false,
		seat7: false,
		seat8: false,
		seat9: false,
		seat10: false,
		seat11: false,
		seat12: false,
		seat13: false,
		seat14: false,
		seat15: false,
		seat16: false,
		seat17: false
	})
	const [selectedSeat, setSelectedSeat] = useState({
		seat1: false,
		seat2: false,
		seat3: false,
		seat4: false,
		seat5: false,
		seat6: false,
		seat7: false,
		seat8: false,
		seat9: false,
		seat10: false,
		seat11: false,
		seat12: false,
		seat13: false,
		seat14: false,
		seat15: false,
		seat16: false,
		seat17: false
	})
	useEffect(() => {
		//check the prop.available array
		//loop over the array and update the state
		//create an empty oobj
		const availableData = {
			seat1: false,
			seat2: false,
			seat3: false,
			seat4: false,
			seat5: false,
			seat6: false,
			seat7: false,
			seat8: false,
			seat9: false,
			seat10: false,
			seat11: false,
			seat12: false,
			seat13: false,
			seat14: false,
			seat15: false,
			seat16: false,
			seat17: false
		}
		//loopOvertheArray
		var j = 1
		for (var i = 0; i < available.length; i++) {
			availableData[available[i]] = true
		}
		setSeat({ ...seat, ...availableData })
	}, [])
	const lastSeat = color => (
		<motion.svg
			variants={svgVariants}
			initial='initial'
			animate='final'
			whileHover='whileHover'
			whileTap='whileTap'
			width='47'
			height='47'
			viewBox='0 0 67 67'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M53.0333 25.2852V19.767C53.0333 15.2146 49.3343 11.4898 44.8132 11.4898H22.8929C18.3718 11.4898 14.6728 15.2146 14.6728 19.767V25.2852C10.1517 25.2852 6.45264 29.0099 6.45264 33.5623V47.3577C6.45264 51.9101 10.1517 55.6348 14.6728 55.6348V61.153H20.1528V55.6348H47.5533V61.153H53.0333V55.6348C57.5544 55.6348 61.2535 51.9101 61.2535 47.3577V33.5623C61.2535 29.0099 57.5544 25.2852 53.0333 25.2852ZM20.1528 19.767C20.1528 18.2495 21.3859 17.008 22.8929 17.008H44.8132C46.3202 17.008 47.5533 18.2495 47.5533 19.767V27.4372C45.8818 28.9547 44.8132 31.1344 44.8132 33.5623V39.0805H22.8929V33.5623C22.8929 31.1344 21.8243 28.9547 20.1528 27.4372V19.767ZM55.7734 47.3577C55.7734 48.8751 54.5404 50.1167 53.0333 50.1167H14.6728C13.1657 50.1167 11.9327 48.8751 11.9327 47.3577V33.5623C11.9327 32.0449 13.1657 30.8033 14.6728 30.8033C16.1798 30.8033 17.4128 32.0449 17.4128 33.5623V44.5986H50.2933V33.5623C50.2933 32.0449 51.5263 30.8033 53.0333 30.8033C54.5404 30.8033 55.7734 32.0449 55.7734 33.5623V47.3577Z'
				fill={color}
			/>
		</motion.svg>
	)
	const seats = color => (
		<motion.svg
			variants={svgVariants}
			initial='initial'
			animate='final'
			whileHover='whileHover'
			whileTap='whileTap'
			width='67'
			height='67'
			viewBox='0 0 67 67'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M53.0333 25.2852V19.767C53.0333 15.2146 49.3343 11.4898 44.8132 11.4898H22.8929C18.3718 11.4898 14.6728 15.2146 14.6728 19.767V25.2852C10.1517 25.2852 6.45264 29.0099 6.45264 33.5623V47.3577C6.45264 51.9101 10.1517 55.6348 14.6728 55.6348V61.153H20.1528V55.6348H47.5533V61.153H53.0333V55.6348C57.5544 55.6348 61.2535 51.9101 61.2535 47.3577V33.5623C61.2535 29.0099 57.5544 25.2852 53.0333 25.2852ZM20.1528 19.767C20.1528 18.2495 21.3859 17.008 22.8929 17.008H44.8132C46.3202 17.008 47.5533 18.2495 47.5533 19.767V27.4372C45.8818 28.9547 44.8132 31.1344 44.8132 33.5623V39.0805H22.8929V33.5623C22.8929 31.1344 21.8243 28.9547 20.1528 27.4372V19.767ZM55.7734 47.3577C55.7734 48.8751 54.5404 50.1167 53.0333 50.1167H14.6728C13.1657 50.1167 11.9327 48.8751 11.9327 47.3577V33.5623C11.9327 32.0449 13.1657 30.8033 14.6728 30.8033C16.1798 30.8033 17.4128 32.0449 17.4128 33.5623V44.5986H50.2933V33.5623C50.2933 32.0449 51.5263 30.8033 53.0333 30.8033C54.5404 30.8033 55.7734 32.0449 55.7734 33.5623V47.3577Z'
				fill={color}
			/>
		</motion.svg>
	)
	return (
		<div className={classes.exterior}>
			<div className={classes.van}>
				<div
					className={seat.seat1 ? classes.seat : classes.seatDisabled}
					id='seat#1'
				>
					{seat.seat1 ? seats(notSelected) : seats(notAvailable)}
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat2 ? classes.seat : classes.seatDisabled}
						id='seat#2'
					>
						{seat.seat2 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat3 ? classes.seat : classes.seatDisabled}
						id='seat#3'
					>
						{seat.seat3 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat4 ? classes.seat : classes.seatDisabled}
						id='seat#4'
					>
						{seat.seat4 ? seats(notSelected) : seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat5 ? classes.seat : classes.seatDisabled}
						id='seat#5'
					>
						{seat.seat5 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat6 ? classes.seat : classes.seatDisabled}
						id='seat#6'
					>
						{seat.seat6 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat7 ? classes.seat : classes.seatDisabled}
						id='seat#7'
					>
						{seat.seat7 ? seats(notSelected) : seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat8 ? classes.seat : classes.seatDisabled}
						id='seat#8'
					>
						{seat.seat8 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat9 ? classes.seat : classes.seatDisabled}
						id='seat#9'
					>
						{seat.seat9 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat10 ? classes.seat : classes.seatDisabled}
						id='seat#10'
					>
						{seat.seat10 ? seats(notSelected) : seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat11 ? classes.seat : classes.seatDisabled}
						id='seat#11'
					>
						{seat.seat11 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat12 ? classes.seat : classes.seatDisabled}
						id='seat#12'
					>
						{seat.seat12 ? seats(notSelected) : seats(notAvailable)}
					</div>
					<div
						className={seat.seat13 ? classes.seat : classes.seatDisabled}
						id='seat#13'
					>
						{seat.seat13 ? seats(notSelected) : seats(notAvailable)}
					</div>
				</div>
				<div className={classes.lastRow}>
					<div id='seat14' className={!seat.seat14 && classes.disabled}>
						{seat.seat14 ? lastSeat(notSelected) : lastSeat(notAvailable)}
					</div>
					<div id='seat#15' className={!seat.seat15 && classes.disabled}>
						{seat.seat15 ? lastSeat(notSelected) : lastSeat(notAvailable)}
					</div>
					<div id='seat#16' className={!seat.seat16 && classes.disabled}>
						{seat.seat16 ? lastSeat(notSelected) : lastSeat(notAvailable)}
					</div>
					<div id='seat#17' className={!seat.seat17 && classes.disabled}>
						{seat.seat17 ? lastSeat(notSelected) : lastSeat(notAvailable)}
					</div>
				</div>
			</div>
			<div className={classes.Number}>718556</div>
		</div>
	)
}

export default Interior
