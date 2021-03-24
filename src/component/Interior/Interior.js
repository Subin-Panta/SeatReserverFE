import React, { useEffect, useState } from 'react'
import classes from './Interior.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useHistory } from 'react-router'

const svgVariants = {
	whileHover: {
		scale: 1.15,

		cursor: 'pointer'
	},
	whileTap: {
		originX: 0.5,
		scale: 0.4,
		rotate: 360,
		position: 'fixed',
		transition: {
			duration: 0.5
		}
	}
}
const submitHandler = (e, history) => {
	//send data to backend
	//where you verify the user selected seats are available
	//if the entered data is correct proceed to the next page

	history.push('/bill')
	//if not refresh with a warning message at the top
}
const select = '#00ff2a'
const notSelected = '#FFF7F7'
const notAvailable = '#ff0000'
const ButtonBuilder = obj => {
	//loop thorugh this if the and if anyone of them is true  return true else return false
	for (const item in obj) {
		if (obj[item] === true) {
			return true
		}
	}
	return false
}
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
	const history = useHistory()
	const clickHandler = (e, seatName) => {
		//console.log(seatName)
		//console.log(selectedSeat[seatName])

		setSelectedSeat({
			...selectedSeat,
			[seatName]: !selectedSeat[seatName]
		})
		console.log('toggled')
	}
	const lastSeat = color => (
		<motion.svg
			variants={svgVariants}
			whileHover='whileHover'
			whileTap='whileTap'
			width='47'
			height='47'
			viewBox='0 0 47 47'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M36.4167 17.625V13.7083C36.4167 10.4771 33.8292 7.83333 30.6667 7.83333H15.3333C12.1708 7.83333 9.58334 10.4771 9.58334 13.7083V17.625C6.42084 17.625 3.83334 20.2687 3.83334 23.5V33.2917C3.83334 36.5229 6.42084 39.1667 9.58334 39.1667V43.0833H13.4167V39.1667H32.5833V43.0833H36.4167V39.1667C39.5792 39.1667 42.1667 36.5229 42.1667 33.2917V23.5C42.1667 20.2687 39.5792 17.625 36.4167 17.625ZM13.4167 13.7083C13.4167 12.6312 14.2792 11.75 15.3333 11.75H30.6667C31.7208 11.75 32.5833 12.6312 32.5833 13.7083V19.1525C31.4142 20.2296 30.6667 21.7767 30.6667 23.5V27.4167H15.3333V23.5C15.3333 21.7767 14.5858 20.2296 13.4167 19.1525V13.7083ZM38.3333 33.2917C38.3333 34.3687 37.4708 35.25 36.4167 35.25H9.58334C8.52918 35.25 7.66668 34.3687 7.66668 33.2917V23.5C7.66668 22.4229 8.52918 21.5417 9.58334 21.5417C10.6375 21.5417 11.5 22.4229 11.5 23.5V31.3333H34.5V23.5C34.5 22.4229 35.3625 21.5417 36.4167 21.5417C37.4708 21.5417 38.3333 22.4229 38.3333 23.5V33.2917Z'
				fill={color}
			/>
		</motion.svg>
	)
	const seats = color => (
		<motion.svg
			variants={svgVariants}
			whileHover='whileHover'
			whileTap='whileTap'
			wnameth='67'
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
					name='seat1'
					onClick={e => clickHandler(e, 'seat1')}
				>
					{seat.seat1
						? selectedSeat.seat1
							? seats(select)
							: seats(notSelected)
						: seats(notAvailable)}
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat2 ? classes.seat : classes.seatDisabled}
						name='seat2'
						onClick={e => clickHandler(e, 'seat2')}
					>
						{seat.seat2
							? selectedSeat.seat2
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat3 ? classes.seat : classes.seatDisabled}
						name='seat3'
						onClick={e => clickHandler(e, 'seat3')}
					>
						{seat.seat3
							? selectedSeat.seat3
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat4 ? classes.seat : classes.seatDisabled}
						name='seat4'
						onClick={e => clickHandler(e, 'seat4')}
					>
						{seat.seat4
							? selectedSeat.seat4
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat5 ? classes.seat : classes.seatDisabled}
						name='seat5'
						onClick={e => clickHandler(e, 'seat5')}
					>
						{seat.seat5
							? selectedSeat.seat5
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat6 ? classes.seat : classes.seatDisabled}
						name='seat6'
						onClick={e => clickHandler(e, 'seat6')}
					>
						{seat.seat6
							? selectedSeat.seat6
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat7 ? classes.seat : classes.seatDisabled}
						name='seat7'
						onClick={e => clickHandler(e, 'seat7')}
					>
						{seat.seat7
							? selectedSeat.seat7
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat8 ? classes.seat : classes.seatDisabled}
						name='seat8'
						onClick={e => clickHandler(e, 'seat8')}
					>
						{seat.seat8
							? selectedSeat.seat8
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat9 ? classes.seat : classes.seatDisabled}
						name='seat9'
						onClick={e => clickHandler(e, 'seat9')}
					>
						{seat.seat9
							? selectedSeat.seat9
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat10 ? classes.seat : classes.seatDisabled}
						name='seat10'
						onClick={e => clickHandler(e, 'seat10')}
					>
						{seat.seat10
							? selectedSeat.seat10
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={seat.seat11 ? classes.seat : classes.seatDisabled}
						name='seat11'
						onClick={e => clickHandler(e, 'seat11')}
					>
						{seat.seat11
							? selectedSeat.seat11
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat12 ? classes.seat : classes.seatDisabled}
						name='seat12'
						onClick={e => clickHandler(e, 'seat12')}
					>
						{seat.seat12
							? selectedSeat.seat12
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
					<div
						className={seat.seat13 ? classes.seat : classes.seatDisabled}
						name='seat13'
						onClick={e => clickHandler(e, 'seat13')}
					>
						{seat.seat13
							? selectedSeat.seat13
								? seats(select)
								: seats(notSelected)
							: seats(notAvailable)}
					</div>
				</div>
				<div className={classes.lastRow}>
					<div
						name='seat14'
						onClick={e => clickHandler(e, 'seat14')}
						className={seat.seat14 ? classes.lastSeat : classes.disabled}
					>
						{seat.seat14
							? selectedSeat.seat14
								? lastSeat(select)
								: lastSeat(notSelected)
							: lastSeat(notAvailable)}
					</div>
					<div
						name='seat15'
						onClick={e => clickHandler(e, 'seat15')}
						className={seat.seat15 ? classes.lastSeat : classes.disabled}
					>
						{seat.seat15
							? selectedSeat.seat15
								? lastSeat(select)
								: lastSeat(notSelected)
							: lastSeat(notAvailable)}
					</div>
					<div
						name='seat16'
						onClick={e => clickHandler(e, 'seat16')}
						className={seat.seat16 ? classes.lastSeat : classes.disabled}
					>
						{seat.seat16
							? selectedSeat.seat16
								? lastSeat(select)
								: lastSeat(notSelected)
							: lastSeat(notAvailable)}
					</div>
					<div
						name='seat17'
						onClick={e => clickHandler(e, 'seat17')}
						className={seat.seat17 ? classes.lastSeat : classes.disabled}
					>
						{seat.seat17
							? selectedSeat.seat17
								? lastSeat(select)
								: lastSeat(notSelected)
							: lastSeat(notAvailable)}
					</div>
				</div>
			</div>
			<div className={classes.Number}>718556</div>
			<AnimatePresence>
				{ButtonBuilder(selectedSeat) ? (
					<motion.button
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						exit={{
							x: '-100vw'
						}}
						transition={{
							duration: 0.25,
							type: 'spring',
							mass: 1,
							damping: 15
						}}
						className={classes.button}
						whileTap={{
							scale: 0.9
						}}
						whileHover={{
							backgroundColor: ['#9dfe00', '#F9FE00'],
							scale: ['1', '0.9'],
							transition: {
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse'
							}
						}}
						onClick={e => submitHandler(e, history)}
					>
						Build Order
					</motion.button>
				) : null}
			</AnimatePresence>
		</div>
	)
}

export default Interior
