import PropTypes from 'prop-types'
import Style from './Login.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import loginService from '../../../../services/LogIn'
import useRoleManagement from '../../../../hooks/useRoleManagement'

export function Login({ active, handleError }) {
	const { handleRole } = useRoleManagement()
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async e => {
		e.preventDefault()
		if ([userName, password].some(field => field.length === 0))
			return handleError({
				error: {
					message: 'Ingrese las credenciales válidas',
					details: 'Los campos no pueden estar vacíos',
				},
			})
		await handleRole({
			sesionFunction: loginService,
			userName,
			password,
			handleError,
		})
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
				<form id='formLogin' className={Style.formLogin}>
					<div className={Style.label}>
						<label htmlFor='usernameLogin'>Nombre de usuario</label>
						<input
							type='text'
							name='usernameLogin'
							id='usernameLogin'
							onChange={e => setUserName(e.target.value)}
							required
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='passwordLogin'>Contraseña</label>
						<input
							type='password'
							name='passwordLogin'
							id='passwordLogin'
							required
							onChange={e => setPassword(e.target.value)}
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
