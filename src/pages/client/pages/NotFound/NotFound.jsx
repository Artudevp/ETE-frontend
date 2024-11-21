import { Link } from 'react-router-dom'
import Icon from '/public/icon.png'
import Style from './NotFound.module.css'

export function NotFound() {
	return (
		<div className={Style.main}>
			<img src={Icon} alt='Icon Eco Tour Express' />
			<h1>
				<span>404</span> - Página no encontrada
			</h1>
			<p>Lo sentimos, la página que buscas no existe.</p>
			<Link to='/user/dashboard/alojamientos'>
				Volver al <span>Dashboard</span>
			</Link>
		</div>
	)
}
