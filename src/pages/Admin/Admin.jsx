import Header from './components/Header/Header'
import HomeAdmin from '../HomeAdmin/HomeAdmin'
import Style from './Admin.module.css'

import { Routes, Route, Navigate } from 'react-router-dom'

function Admin() {
	return (
		<div className={Style.main}>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='home' />} />
				<Route path='home' element={<HomeAdmin />} />
			</Routes>
		</div>
	)
}

export default Admin
