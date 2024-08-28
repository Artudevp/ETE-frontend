import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='login' element={<Home login={true} />} />
					<Route path='register' element={<Home register={true} />} />
					<Route path='/dashboard/*' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default AppRoutes
