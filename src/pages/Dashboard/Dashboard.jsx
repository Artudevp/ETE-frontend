import SideBar from './components/SideBar/SideBar'
import Alojamientos from '../Alojamientos/Alojamientos'
import InfoAlojamiento from '../InfoAlojamiento/InfoAlojamiento'
import Actividades from '../Actividades/Actividades'
import Servicios from '../Servicios/Servicios'
import NotFound from '../NotFound/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
import Style from './Dashboard.module.css'

function Dashboard() {
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

export default Dashboard
