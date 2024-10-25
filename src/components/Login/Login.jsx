import PropTypes from 'prop-types'
import Style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import loginService from '../../services/LogIn'

function Login({ active }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const onSubmit = async e => {
		e.preventDefault()
		try {
			const role = await loginService(username, password) // Obtener el rol del login
			if (role === 'ROLE_ADMIN') {
				navigate('/admin/dashboard')
			} else if (role === 'ROLE_USER') {
				navigate('/user/dashboard')
			}
		} catch (error) {
			alert('Error en el inicio de sesión. Verifique sus credenciales.')
		}
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
						<label htmlFor='usernameLogin'>Nombre de usuario</label>
						<input
							type='text'
							name='usernameLogin'
							id='usernameLogin'
							onChange={e => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='passwordLogin'>Contraseña</label>
						<input
							type='password'
							name='passwordLogin'
							id='passwordLogin'
							onChange={e => setPassword(e.target.value)}
							required
						/>
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
