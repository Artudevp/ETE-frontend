import Style from './AdminRoutes.module.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import Clients from './pages/Clients/Clients'
import Activities from './pages/Activities/Activities'
import RoutesAdmin from './pages/Routes/Routes'
import Hospitality from './pages/Hospitality/Hospitality'
import AddUser from './pages/AddUser/AddUser'
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
	{ path: 'crear-usuario', element: <AddUser /> },
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
