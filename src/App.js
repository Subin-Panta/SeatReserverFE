import './App.css'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './component/Home/Home'
import NotFound from './component/NotFound/NotFound'
import Bill from './component/Bill/Bill'

import Landing from './component/Landing/Landing'
import Header from './component/Header/Header'
import ViewOrder from './component/ViewOrder/ViewOrder'
import Orders from './component/Orders/Orders'

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path='/' exact component={Landing} />
					<Route path='/Order' exact component={Home} />
					<Route path='/bill' exact component={Bill} />
					<Route exact path='/viewOrder' component={ViewOrder} />
					<Route exact path='/orders' component={Orders} />
					<Route component={NotFound} />
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
