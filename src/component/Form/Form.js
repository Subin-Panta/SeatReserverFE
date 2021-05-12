
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import classes from './form.module.css'

const Form = ({ gottaGo }) => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		emailAddress: ''
	})
	const inputChangeHandler = e => {
		console.log(e.target.name)
		if (e.target.name === 'phoneNumber') {
			console.log('Check for number')
			if (!isNaN(e.target.value)) {
				console.log('Is a number')
				setFormData({ ...formData, [e.target.name]: e.target.value })
			}
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value })
		}
	}
	const submitHandler = e => {
		e.preventDefault()
		//check if the fields
		gottaGo(formData)
	}
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={`${classes.inputContainer} ${classes.ic1}`}>
				<input
					value={formData.firstName}
					name='firstName'
					onChange={inputChangeHandler}
					className={classes.input}
					type='text'
					placeholder=' '
					required
				/>
				{/* <div className={classes.cut}></div> */}
				<label htmlFor='firstname' className={classes.placeholder}>
					First name
				</label>
			</div>

			<div className={`${classes.inputContainer} ${classes.ic2}`}>
				<input
					value={formData.lastName}
					name='lastName'
					onChange={inputChangeHandler}
					className={classes.input}
					type='text'
					placeholder=' '
					required
				/>
				<div className={classes.cut}></div>
				<label htmlFor='lastName' className={classes.placeholder}>
					Last name
				</label>
			</div>

			<div className={`${classes.inputContainer} ${classes.ic2}`}>
				<input
					value={formData.phoneNumber}
					name='phoneNumber'
					onChange={inputChangeHandler}
					className={classes.input}
					type='text'
					placeholder=' '
					required
					minLength='9'
				/>

				<label htmlFor='phoneNumber' className={classes.placeholder}>
					Phone Number
				</label>
			</div>

			<div className={`${classes.inputContainer} ${classes.ic2}`}>
				<input
					value={formData.emailAddress}
					name='emailAddress'
					onChange={inputChangeHandler}
					className={classes.input}
					type='email'
					placeholder='email@example.com'
					required
				/>

				<label htmlFor='emailAddress' className={classes.placeholder}>
					Email
				</label>
				<motion.input
					whileHover={{
						color: ['#000', '#fff'],
						backgroundColor: ['#2988F8', '#2956F8'],
						scale: ['1', '1.2'],
						transition: {
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'reverse'
						},
						cursor: 'pointer'
					}}
					type='submit'
					className={classes.submit}
					value='Place Order'
				/>
			</div>
		</form>
	)
}

export default Form
