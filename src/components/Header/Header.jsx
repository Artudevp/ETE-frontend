import Style from './Header.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
	const [visible, setVisible] = useState(true)
	const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window.scrollY)

	useEffect(() => {
		const handleScroll = () => {
			const desplazamiento_Actual = window.scrollY
			if (ubicacionPrincipal > desplazamiento_Actual) {
				setVisible(true)
			} else {
				setVisible(false)
			}
			setUbicacionPrincipal(desplazamiento_Actual)
		}

		window.addEventListener('scroll', handleScroll)

		// Limpieza del efecto al desmontar el componente
		return () => window.removeEventListener('scroll', handleScroll)
	}, [ubicacionPrincipal])
	return (
		<header
			className={`${Style.header} text-white fixed w-full flex justify-center ease-in-out duration-500 z-10`}
			style={{ top: visible ? '0' : '-150px' }}
		>
			<div className=' backdrop-blur-sm p-3 m-3 rounded-lg border-2 border-green-500'>
				<ul className='flex gap-5 justify-center sm:text-base md:text-lg flex-wrap '>
					<li>
						<a href='#main'>Inicio</a>
					</li>
					<li>
						<a href='#content'>Que ofrecemos</a>
					</li>
					<li>
						<a href='#'>Planes</a>
					</li>
					<li>
						<a href='#'>Sobre nosotros</a>
					</li>
					<li>
						<Link to='/login'>Iniciar sesión</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
