import { IoBedOutline } from 'react-icons/io5'
import { CiStar } from 'react-icons/ci'
import { MdOutlineRoomService } from 'react-icons/md'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'
import { MdOutlineExitToApp } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Style from './SideBar.module.css'

function SideBar() {
	const onClick = () => {
		window.location = '/'
	}
	return (
		<nav className={Style.nav}>
			<ul>
				<li>
					<NavLink
						to='/user/dashboard/alojamientos'
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : 'normal',
							}
						}}
					>
						<IoBedOutline size='2em' />
						<p>Alojamientos</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/user/dashboard/actividades'
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
							}
						}}
					>
						<CiStar size='2em' />
						<p>Actividades</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/user/dashboard/servicios'
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
							}
						}}
					>
						<MdOutlineRoomService size='2em' />
						<p>Servicios</p>
					</NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<NavLink
						to='/user/dashboard/notificaciones'
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
							}
						}}
					>
						<IoIosNotificationsOutline size='2em' />
						<p>Notificaciones</p>
					</NavLink>
				</li>
				<li>
					<a onClick={onClick}>
						<MdOutlineExitToApp size='2em' />
						<p>Salir</p>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default SideBar
