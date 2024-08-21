import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/about' element={<h1>About</h1>} />
					<Route path='/contact' element={<h1>Contact</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default AppRoutes
