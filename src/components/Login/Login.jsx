import PropTypes from 'prop-types'
import Style from './Login.module.css'
import { Link } from 'react-router-dom'

function Login({ active }) {
	const onSubmit = e => {
		e.preventDefault()
		window.location = '/user/dashboard'
	}

	return (
		<div
			className={Style.modalLogin}
			style={{
				opacity: active ? '1' : '0',
				pointerEvents: active ? 'all' : 'none',
			}}
		>
			<div className={Style.modalContent}>
				<img src='./icon.png' alt='Icon EcoTourExpress' />
				<h1>Iniciar Sesión</h1>
				<form noValidate id='formLogin' className={Style.formLogin}>
					<div className={Style.label}>
						<label htmlFor='emailLogin'>Correo electrónico</label>
						<input type='email' name='emailLogin' id='emailLogin' />
					</div>
					<div className={Style.label}>
						<label htmlFor='passwordLogin'>Contraseña</label>
						<input type='password' name='passwordLogin' id='passwordLogin' />
					</div>
					<div className={Style.boxButton}>
						<button
							id='botonEnviarLogin'
							type='submit'
							onClick={e => onSubmit(e)}
						>
							Ingresar
						</button>
					</div>
				</form>
				<div className={Style.links}>
					<a href='#'>¿Olvidó sus credenciales?</a>
					<Link to='/register'>¿Eres nuevo? Crea una cuenta ahora mismo!</Link>
					<Link to='/admin/dashboard'>Admin</Link>
				</div>
				<Link to='/' className={Style.buttonExit}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1.5em'
						height='1.5em'
						viewBox='0 0 32 32'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 23L23 9m0 14L9 9'
						/>
					</svg>
				</Link>
			</div>
		</div>
	)
}

Login.propTypes = {
	active: PropTypes.bool,
}

export default Login
