import axios from 'axios'
import React, { useState } from 'react'
import classes from './Orders.module.css'
import WithErrorHandler from '../hoc/WithErrorHandler'
import { useHistory } from 'react-router'
const Orders = () => {
	const history = useHistory()
	const [data, setData] = useState({ orderId: '' })
	const [show, setShow] = useState(false)
	const [orderData, setOrderData] = useState({})
	const changeHandler = e => {
		setData({ ...data, orderId: e.target.value })
	}
	const viewHandler = async e => {
		console.log('Here')
		try {
			const response = await axios.get(
				`/order/downloadOrder/${orderData.data.result._id}`,
				{
					responseType: 'blob'
				}
			)
			history.push('/')
			//opening new tab in window
			//Create a Blob from the PDF Stream
			const file = new Blob([response.data], { type: 'application/pdf' })
			//Build a URL from the file
			const fileURL = URL.createObjectURL(file)
			//Open the URL on new Window
			const pdfWindow = window.open()
			pdfWindow.location.href = fileURL
		} catch (error) {
			console.log(error)
		}
	}
	const clickHandler = async e => {
		// get data.orderId, if it is null seterror and display a error message
		//make asynchronous request to backend to get the order
		//if error then display error
		//if found display the order. Allow user to download/Cancel the order
		const ID = data.orderId
		console.log(ID)
		if (ID) {
			try {
				const result = await axios.get(`/order/findOrder/${ID}`)
				if ((result.statusCode = 200)) {
					//display Order Below the search Box
					console.log(result)
					setShow(true)
					setOrderData({ ...result })
				}
			} catch (error) {
				//error is handled by oiur HOC
				console.log(error)
			}
		}
	}
	const svg = (
		<svg
			width='62'
			height='62'
			viewBox='0 0 62 62'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M25.8337 46.5C30.419 46.4991 34.8722 44.964 38.4842 42.1393L49.8406 53.4957L53.4934 49.8428L42.1371 38.4865C44.9632 34.8741 46.4992 30.4199 46.5003 25.8333C46.5003 14.4383 37.2287 5.16667 25.8337 5.16667C14.4386 5.16667 5.16699 14.4383 5.16699 25.8333C5.16699 37.2284 14.4386 46.5 25.8337 46.5ZM25.8337 10.3333C34.3819 10.3333 41.3337 17.2851 41.3337 25.8333C41.3337 34.3816 34.3819 41.3333 25.8337 41.3333C17.2854 41.3333 10.3337 34.3816 10.3337 25.8333C10.3337 17.2851 17.2854 10.3333 25.8337 10.3333Z'
				fill='black'
			/>
			<path
				d='M29.4804 22.1805C30.4595 23.1622 30.9994 24.459 30.9994 25.8333H36.1661C36.1683 24.4756 35.9015 23.1309 35.3809 21.8769C34.8604 20.623 34.0964 19.4846 33.1332 18.5277C29.2221 14.6217 22.4408 14.6217 18.5322 18.5277L22.1799 22.1857C24.1432 20.2275 27.5274 20.2327 29.4804 22.1805Z'
				fill='black'
			/>
		</svg>
	)
	return (
		<div>
			<div className={classes.foreGround}>
				<div className={classes.container}>
					<input
						name='search'
						className={classes.searchBox}
						type='text'
						value={data.orderId}
						onChange={changeHandler}
						placeholder=''
					></input>
					<label htmlFor='search' className={classes.placeholder}>
						Enter your Order Id
					</label>
					<div onClick={clickHandler} className={classes.svg}>
						{svg}
					</div>
				</div>
				<div className={show ? classes.view : classes.invisible}>
					<div className={classes.orderNumber}>
						Order #{orderData.data && orderData.data.result._id}
					</div>
					<div className={classes.read} onClick={viewHandler}>
						<svg
							width='75'
							height='75'
							viewBox='0 0 75 75'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M66.4281 34.2563C67.9094 36.1938 67.9094 38.8094 66.4281 40.7438C61.7625 46.8344 50.5687 59.375 37.5 59.375C24.4312 59.375 13.2375 46.8344 8.57185 40.7438C7.85117 39.816 7.45996 38.6747 7.45996 37.5C7.45996 36.3253 7.85117 35.184 8.57185 34.2563C13.2375 28.1656 24.4312 15.625 37.5 15.625C50.5687 15.625 61.7625 28.1656 66.4281 34.2563V34.2563Z'
								stroke='#FFDADA'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M37.5 46.875C42.6777 46.875 46.875 42.6777 46.875 37.5C46.875 32.3223 42.6777 28.125 37.5 28.125C32.3223 28.125 28.125 32.3223 28.125 37.5C28.125 42.6777 32.3223 46.875 37.5 46.875Z'
								stroke='white'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WithErrorHandler(Orders, axios)
