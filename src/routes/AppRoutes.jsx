import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ClientRoutes from '../pages/client/ClientRoutes'
import AdminRoutes from '../pages/Admin/AdminRoutes'

const routes = [
	{ path: '/login', element: <Home login={true} /> },
	{ path: '/register', element: <Home register={true} /> },
	{ path: '/user/dashboard/*', element: <ClientRoutes /> },
	{ path: '/admin/dashboard/*', element: <AdminRoutes /> },
]

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					{routes.map(route => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default AppRoutes
