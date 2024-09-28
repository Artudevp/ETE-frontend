import { Link } from 'react-router-dom'
import Style from './HomeAdmin.module.css'

import 'primeicons/primeicons.css' //icons

const HomeAdmin = () => {
	const buttons = [
		{
			label: 'Ir a Usuarios',
			icon: 'pi pi-user',
			link: '/admin/dashboard/usuarios',
			className: 'p-button-success',
			bgColor: '#93dea',
		},
		{
			label: 'Ir a Productos',
			icon: 'pi pi-box',
			link: '/admin/dashboard/productos',
			className: 'p-button-primary',
			bgColor: '#b19df7',
		},
		{
			label: 'Ir a Clientes',
			icon: 'pi pi-users',
			link: '/admin/dashboard/clientes',
			className: 'p-button-info',
			bgColor: '#9bcaff',
		},
		{
			label: 'Ir a Actividades',
			icon: 'pi pi-calendar',
			link: '/admin/dashboard/actividades',
			className: 'p-button-warning',
			bgColor: '#ffcf91',
		},
		{
			label: 'Ir a Rutas',
			icon: 'pi pi-map',
			link: '/admin/dashboard/rutas',
			className: 'p-button-secondary',
			bgColor: '#d4ea93',
		},
		{
			label: 'Ir a Hospedaje',
			icon: 'pi pi-home',
			link: '/admin/dashboard/hospedaje',
			className: 'p-button-secondary',
			bgColor: '#d4ea93',
		},
	]
	return (
		<div className={Style.main}>
			<div className={Style.panel}>
				<div className={Style.boxTitle}>
					<h1>Bienvenido a la Gestión de Datos de EcoTourExpress (CRUD)</h1>
				</div>
				<div className={Style.panelContent}>
					<h2>¡Bienvenido!</h2>
					<p>
						Esta es tu aplicación para gestionar usuarios, clientes,
						actividades, productos y rutas.
					</p>
					<div
						style={{
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
							flexWrap: 'wrap',
							gap: '5px',
						}}
					>
						{buttons.map((button, index) => (
							<Link
								to={button.link}
								key={index}
								style={{ backgroundColor: button.bgColor }}
								className={Style.button}
							>
								<i className={button.icon}></i>
								{button.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAdmin
