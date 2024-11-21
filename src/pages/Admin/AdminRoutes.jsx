import Style from './AdminRoutes.module.css'
import { Header } from './components'
import {
	Home,
	Users,
	Products,
	Clients,
	Activities,
	RoutesAdmin,
	Hospitality,
} from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminProvider } from '../../context/AdminProvider'

const routes = [
	{ path: 'home', element: <Home /> },
	{ path: 'usuarios', element: <Users /> },
	{ path: 'productos', element: <Products /> },
	{ path: 'clientes', element: <Clients /> },
	{ path: 'actividades', element: <Activities /> },
	{ path: 'rutas', element: <RoutesAdmin /> },
	{ path: 'hospedaje', element: <Hospitality /> },
]

function AdminRoutes() {
	return (
		<div className={Style.main}>
			<Header />
			<div className={Style.content}>
				<AdminProvider>
					<Routes>
						<Route path='/' element={<Navigate to='home' />} />
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</AdminProvider>
			</div>
		</div>
	)
}

export default AdminRoutes
