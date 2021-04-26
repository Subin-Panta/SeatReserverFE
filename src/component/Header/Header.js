import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
const Header = () => {
	return (
		<div className={classes.header}>
			<ul className={classes.headerUl}>
				<li
					className={classes.mobileNav}
					onClick={() => console.log('WHASSUP MOFO')}
				>
					<span className={classes.individual}></span>
					<span className={classes.individual}></span>
					<div className={classes.drawer}>Drawer</div>
				</li>
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
	)
}

export default Header
