import Style from './Header.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
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
		<header className={Style.header} style={{ top: visible ? '0' : '-150px' }}>
			<div className={Style.headerContent}>
				<ul>
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
