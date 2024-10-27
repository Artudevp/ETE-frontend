import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ClientRoutes from '../pages/client/ClientRoutes'
import AdminRoutes from '../pages/Admin/AdminRoutes'
import ProtectedRoute from './ProtectedRoute'

const routes = [
	{ path: '/login', element: <Home login={true} />, allowedRoles: [] },
	{ path: '/register', element: <Home register={true} />, allowedRoles: [] },
	{
		path: '/user/dashboard/*',
		element: <ClientRoutes />,
		allowedRoles: ['ROLE_USER'],
	},
	{
		path: '/admin/dashboard/*',
		element: <AdminRoutes />,
		allowedRoles: ['ROLE_ADMIN'],
	},
]

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} /> {/* Ruta pública */}
				{routes.map(({ path, element, allowedRoles }) =>
					allowedRoles.length > 0 ? (
						<Route
							key={path}
							path={path}
							element={
								<ProtectedRoute allowedRoles={allowedRoles}>
									{element}
								</ProtectedRoute>
							}
						/>
					) : (
						<Route key={path} path={path} element={element} /> // Ruta pública
					),
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
