import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ClientRoutes from '../pages/client/ClientRoutes'
import AdminRoutes from '../pages/admin/AdminRoutes'

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='login' element={<Home login={true} />} />
					<Route path='register' element={<Home register={true} />} />
					<Route path='/user/dashboard/*' element={<ClientRoutes />} />
					<Route path='/admin/dashboard/*' element={<AdminRoutes />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default AppRoutes
