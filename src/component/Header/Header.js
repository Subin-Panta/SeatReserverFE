import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
const Header = () => {
	const [display, setDisplay] = useState(false)

	return (
		<div>
			<div className={classes.header}>
				<ul className={classes.headerUl}>
					<li className={classes.headerLi}>
						<Link to='/'>Home</Link>
					</li>
					<li className={classes.headerLi}>
						<Link to='/order'>Place Order</Link>
					</li>
					<li className={classes.headerLi}>
						<Link to='/orders'>Orders </Link>
					</li>
					<li className={classes.headerLiLast}>
						<span className={classes.text}>Get Notified!</span>
					</li>
				</ul>
			</div>
			<div className={classes.sideBar}>
				<div
					className={classes.showSideBar}
					onClick={() => setDisplay(!display)}
				>
					<svg
						width='81'
						height='81'
						viewBox='0 0 81 81'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						style={{ display: 'block', margin: 'auto' }}
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M81 40.5C81 62.8675 62.8675 81 40.5 81C18.1325 81 0 62.8675 0 40.5C0 18.1325 18.1325 0 40.5 0C62.8675 0 81 18.1325 81 40.5ZM16.6438 25.7055C16.6438 23.9692 18.0514 22.5616 19.7877 22.5616H61.2123C62.9486 22.5616 64.3562 23.9692 64.3562 25.7055C64.3562 27.4418 62.9486 28.8493 61.2123 28.8493H19.7877C18.0514 28.8493 16.6438 27.4418 16.6438 25.7055ZM18.3082 37.3562C16.5719 37.3562 15.1644 38.7637 15.1644 40.5C15.1644 42.2363 16.5719 43.6438 18.3082 43.6438H19.7877H59.7329H61.2123C62.9486 43.6438 64.3562 42.2363 64.3562 40.5C64.3562 38.7637 62.9486 37.3562 61.2123 37.3562H59.7329H19.7877H18.3082ZM18.3082 51.0411C16.5719 51.0411 15.1644 52.4486 15.1644 54.1849C15.1644 55.9212 16.5719 57.3288 18.3082 57.3288H59.7329C61.4692 57.3288 62.8767 55.9212 62.8767 54.1849C62.8767 52.4486 61.4692 51.0411 59.7329 51.0411H18.3082Z'
							fill='white'
						/>
					</svg>
				</div>
				<AnimatePresence>
					{display && (
						<motion.ul
							className={classes.box}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 200 }}
							transition={{ duration: 1 }}
						>
							<li
								className={classes.headerLi}
								onClick={() => setDisplay(!display)}
							>
								<Link to='/'>Home</Link>
							</li>
							<li
								className={classes.headerLi}
								onClick={() => setDisplay(!display)}
							>
								<Link to='/order'>Place Order</Link>
							</li>
							<li
								className={classes.headerLi}
								onClick={() => setDisplay(!display)}
							>
								<Link to='/orders'>Orders </Link>
							</li>
							<li className={classes.headerLiLast}>
								<span className={classes.text}>Get Notified!</span>
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Header
