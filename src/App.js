import './App.css'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './component/Home/Home'
import NotFound from './component/NotFound/NotFound'
import Bill from './component/Bill/Bill'
import Header from './component/Header/Header'



function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path='/' exact component={Home} />
					<Route path='/bill' exact component={Bill} />
					<Route component={NotFound} />
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
