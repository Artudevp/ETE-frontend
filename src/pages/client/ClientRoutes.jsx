import Style from './ClientRoutes.module.css'
import SideBar from './components/SideBar/SideBar'
import Alojamientos from './pages/Alojamientos/Alojamientos'
import InfoAlojamiento from './pages/InfoAlojamiento/InfoAlojamiento'
import Actividades from './pages/Actividades/Actividades'
import Servicios from './pages/Servicios/Servicios'
import NotFound from './pages/NotFound/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'

const routes = [
	{ path: 'alojamientos', element: <Alojamientos /> },
	{ path: 'alojamientos/habitacion', element: <InfoAlojamiento /> },
	{ path: 'actividades', element: <Actividades /> },
	{ path: 'servicios', element: <Servicios /> },
	{ path: '*', element: <NotFound /> },
]

function ClientRoutes() {
	return (
		<main className={Style.main}>
			<SideBar />
			<div className={Style.content}>
				<Routes>
					<Route path='/' element={<Navigate to='alojamientos' />} />
					{routes.map(route => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</div>
		</main>
	)
}

export default ClientRoutes
