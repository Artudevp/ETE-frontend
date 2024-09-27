import { NavLink } from 'react-router-dom'
import Style from './Header.module.css'

function Header() {
	const items = [
		{
			label: 'Inicio',
			icon: 'pi pi-fw pi-home',
			url: '/admin/dashboard/home',
			id: 1,
		},
		{
			label: 'Usuarios',
			icon: 'pi pi-fw pi-user',
			url: '/admin/dashboard/usuarios',
			id: 2,
		},
		{
			label: 'Productos',
			icon: 'pi pi-fw pi-box',
			url: '/admin/dashboard/productos',
			id: 3,
		},
		{
			label: 'Clientes',
			icon: 'pi pi-fw pi-users',
			url: '/admin/dashboard/clientes',
			id: 4,
		},
		{
			label: 'Actividades',
			icon: 'pi pi-fw pi-calendar',
			url: '/admin/dashboard/actividades',
			id: 5,
		},
		{
			label: 'Rutas',
			icon: 'pi pi-fw pi-map',
			url: '/admin/dashboard/rutas',
			id: 6,
		},
		{
			label: 'Hospedaje',
			icon: 'pi pi-fw pi-home',
			url: '/admin/dashboard/hospedaje',
			id: 7,
		},
	]
	return (
		<header className={Style.header}>
			<nav>
				<ul className={Style.items}>
					{items.map(link => (
						<li key={link.id}>
							<NavLink
								to={link.url}
								style={{
									color: 'white',
									textDecoration: 'none',
									display: 'flex',
									gap: '8px',
									padding: '10px',
									borderRadius: '12px',
								}}
								className={({ isActive }) =>
									isActive ? Style.itemActive : Style.itemInactive
								}
							>
								<i className={link.icon}></i>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
