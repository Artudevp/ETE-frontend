import Style from './Home.module.css'
import imgWelcome from '../../assets/imgWelcome.jpg'
import imgAtardecer from '../../assets/imgAtardecer.jpg'
import imgPlan from '../../assets/imgPlan.jpg'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Header from '../../components/Header/Header'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Home({ login, register }) {
	const [activeLogin, setActiveLogin] = useState(false)
	const [activeRegister, setActiveRegister] = useState(false)

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
					<img src={imgAtardecer} alt='Image' width='auto' height='auto' />
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
					<img src={imgPlan} alt='Image-plan' width='auto' height='auto' />
				</section>

				<section className={Style.comingSoon}>
					Próximamente se añadirá más contenido :D
				</section>
			</main>
			<Login active={activeLogin} />
			<Register active={activeRegister} />
		</>
	)
}

Home.propTypes = {
	login: PropTypes.bool,
	register: PropTypes.bool,
}

Home.defaultProps = {
	login: false,
	register: false,
}

export default Home
