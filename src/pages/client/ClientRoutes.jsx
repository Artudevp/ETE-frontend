import SideBar from './components/SideBar/SideBar'
import Alojamientos from './pages/Alojamientos/Alojamientos'
import InfoAlojamiento from './pages/InfoAlojamiento/InfoAlojamiento'
import Actividades from './pages/Actividades/Actividades'
import Servicios from './pages/Servicios/Servicios'
import NotFound from './pages/NotFound/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
import Style from './ClientRoutes.module.css'

function ClientRoutes() {
	return (
		<main className={Style.main}>
			<SideBar />
			<div className={Style.content}>
				<Routes>
					<Route path='/' element={<Navigate to='alojamientos' />} />
					<Route path='alojamientos' element={<Alojamientos />} />
					<Route path='alojamientos/habitacion' element={<InfoAlojamiento />} />
					<Route path='actividades' element={<Actividades />} />
					<Route path='servicios' element={<Servicios />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</main>
	)
}

export default ClientRoutes
