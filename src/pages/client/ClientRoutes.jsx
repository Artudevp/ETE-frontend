import Style from './ClientRoutes.module.css'
import SideBar from './components/SideBar/SideBar'
import Alojamientos from './pages/Alojamientos/Alojamientos'
import InfoAlojamiento from './pages/InfoAlojamiento/InfoAlojamiento'
import Actividades from './pages/Actividades/Actividades'
import InfoActividad from './pages/InfoActividad/InfoActividad'
import Rutas from './pages/Rutas/Rutas'
import InfoRuta from './pages/InfoRuta/InfoRuta'
import Productos from './pages/Productos/Productos'
import InfoProducto from './pages/InfoProductos/InfoProducto'
import NotFound from './pages/NotFound/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ClientProvider } from '../../context/ClientProvider'


const routes = [
	{ path: 'alojamientos', element: <Alojamientos /> },
	{ path: 'alojamientos/habitacion', element: <InfoAlojamiento /> },
	{ path: 'actividades', element: <Actividades /> },
	{ path: 'actividades/actividad', element: <InfoActividad /> },
	{ path: 'rutas', element: <Rutas /> },
	{ path: 'rutas/ruta', element: <InfoRuta /> },
	{ path: 'productos', element: <Productos/>},
	{ path: 'productos/producto', element: <InfoProducto/>},
	{ path: '*', element: <NotFound /> },
]

function ClientRoutes() {
	return (
		<main className={Style.main}>
			<SideBar />
			<div className={Style.content}>
				<ClientProvider>
					<Routes>
						<Route path='/' element={<Navigate to='alojamientos' />} />
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</ClientProvider>
			</div>
		</main>
	)
}

export default ClientRoutes
