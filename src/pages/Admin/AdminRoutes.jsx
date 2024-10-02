import Header from './components/Header/Header'
import Style from './AdminRoutes.module.css'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import Clients from './pages/Clients/Clients'
import Activities from './pages/Activities/Activities'
import RoutesAdmin from './pages/Routes/Routes'
import Hospitality from './pages/Hospitality/Hospitality'

import { Routes, Route, Navigate } from 'react-router-dom'

function AdminRoutes() {
	return (
		<div className={Style.main}>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='home' />} />
				<Route path='home' element={<Home />} />
				<Route path='usuarios' element={<Users />} />
				<Route path='productos' element={<Products />} />
				<Route path='clientes' element={<Clients />} />
				<Route path='actividades' element={<Activities />} />
				<Route path='rutas' element={<RoutesAdmin />} />
				<Route path='hospedaje' element={<Hospitality />} />
			</Routes>
		</div>
	)
}

export default AdminRoutes
