import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
const WithErrorHandler = (WrappedComponent, axios) => {
	const NewComponent = props => {
		const [ready, setReady] = useState(false)
		const [error, setError] = useState(null)
		console.log('runs')
		useEffect(() => {
			const req = axios.interceptors.request.use(config => {
				return config
			})
			const res = axios.interceptors.response.use(null, error => {
				setError(error)
				return Promise.reject(error)
			})
			setReady(true)
			return () => {
				axios.interceptors.request.eject(req)
				axios.interceptors.response.eject(res)
			}
		}, [])
		if (!ready) return null
		return (
			<div>
				{error ? (
					<Modal clickHandler={() => setError(null)}> {error.message}</Modal>
				) : null}
				<WrappedComponent {...props} />
			</div>
		)
	}
	return NewComponent
}
export default WithErrorHandler
