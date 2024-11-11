import Style from './Home.module.css'
import imgWelcome from '../../assets/imgWelcome.jpg'
import imgAtardecer from '../../assets/imgAtardecer.jpg'
import imgPlan from '../../assets/imgPlan.jpg'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Error from '../../components/Error/Error'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const errorModalState = {
	message: null,
	details: null,
}

function Home({ login, register }) {
	const [activeLogin, setActiveLogin] = useState(false)
	const [activeRegister, setActiveRegister] = useState(false)
	const [error, setError] = useState(errorModalState)

	const handleSetError = ({ error }) => {
		setError(error)
	}

	useEffect(() => {
		if (login) {
			setActiveLogin(true)
		} else {
			setActiveLogin(false)
		}
	}, [login])

	useEffect(() => {
		if (register) {
			setActiveRegister(true)
		} else {
			setActiveRegister(false)
		}
	}, [register])

	return (
		<>
			<Header />
			<main id='main' className={Style.main}>
				<div>
					<img
						className={Style.imgWelcome}
						src={imgWelcome}
						alt='background Image'
					/>
					<div className={Style.contentWelcome}>
						<img
							className={Style.logoHome}
							src='./icon.png'
							alt='Logo'
							width='auto'
							height='auto'
						/>
						<h1 className={Style.titleHome}>
							¡Conoce tu próximo destino para disfrutar en familia!
						</h1>
						<div className={Style.arrowBox}>
							<a href='#content'>Ver más</a>
							<svg
								className={Style.arrow}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2.5'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
								/>
							</svg>
						</div>
					</div>
				</div>

				{/* Section Que Ofrecemos */}
				<section id='content' className={`${Style.section}`}>
					<div className={Style.sectionContent}>
						<h2>
							¿Que <span>ofrecemos</span>?
						</h2>
						<p>
							Servicio de restaurante, zona de descanso en hamacas, piscina de
							agua natural, actividades de deportes extremos (canyoning o
							rapel), cabalgata ecológica, camping, visita a la cueva Ibanasca,
							avistamiento de aves y cascadas.
						</p>
					</div>
					<Image
						src={imgAtardecer}
						alt='Image'
						width='100%'
						minWidth='250px'
						maxWidth='560px'
					/>
				</section>

				{/* Section Nuestras Atracciones */}
				<section className={Style.section}>
					<div className={Style.sectionContent}>
						<h2>
							Nuestras <span>atracciones</span>
						</h2>
						<p>
							Explora todas las atracciones que tenemos disponibles para que
							disfrutes y descanses de tu rutina!
						</p>
					</div>
					<Image
						src={imgPlan}
						alt='Image-plan'
						width='100%'
						minWidth='250px'
						maxWidth='560px'
					/>
				</section>

				<section className={Style.comingSoon}>
					Próximamente se añadirá más contenido :D
				</section>
			</main>
			<Login active={activeLogin} handleError={handleSetError} />
			<Register active={activeRegister} handleError={handleSetError} />
			<Error error={error} />
		</>
	)
}

Home.propTypes = {
	login: PropTypes.bool,
	register: PropTypes.bool,
}

export default Home
