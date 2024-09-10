import { IoBedOutline } from 'react-icons/io5'
import { CiStar } from 'react-icons/ci'
import { MdOutlineRoomService } from 'react-icons/md'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'
import { MdOutlineExitToApp } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function SideBar() {
	const onClick = () => {
		window.location = '/'
	}
	return (
		<nav className='h-dvh w-32 bg-green-200 px-5 py-2 flex flex-col justify-between shadow-2xl fixed'>
			<ul className='flex flex-col gap-5'>
				<li>
					<NavLink
						to='/user/dashboard/alojamientos'
						className='flex flex-col items-center '
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
						className='flex flex-col items-center'
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
						className='flex flex-col items-center'
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
			<ul className='flex flex-col gap-5'>
				<li>
					<NavLink
						to='/user/dashboard/notificaciones'
						className='flex flex-col items-center'
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
				<li className='flex flex-col items-center' onClick={onClick}>
					<MdOutlineExitToApp size='2em' />
					<p>Salir</p>
				</li>
			</ul>
		</nav>
	)
}

export default SideBar
