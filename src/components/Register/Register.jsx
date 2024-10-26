import { Link } from 'react-router-dom'
import Style from './Register.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import registerService from '../../services/Register'
import useRoleManagement from '../../hooks/useRoleManagement'

function Register({ active }) {
	const { handleRole } = useRoleManagement()
	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async e => {
		e.preventDefault()
		await handleRole({
			sesionFunction: registerService,
			userName,
			password,
			email,
			firstName,
			lastName,
		})
	}

	return (
		<div
			className={Style.modalRegister}
			style={{
				opacity: active ? '1' : '0',
				pointerEvents: active ? 'all' : 'none',
			}}
		>
			<div className={Style.modalContent}>
				<img src='./icon.png' alt='Icon EcoTourExpress' />
				<h1>Registro</h1>
				<form
					noValidate
					id='formRegister'
					action='#'
					className={Style.formRegister}
				>
					<div className={Style.label}>
						<label htmlFor='firstNameRegister'>Nombres</label>
						<input
							type='text'
							name='firstNameRegister'
							id='firstNameRegister'
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='lastNameRegister'>Apellidos</label>
						<input
							type='text'
							name='lastNameRegister'
							id='lastNameRegister'
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='usernameRegister'>Nombre de usuario</label>
						<input
							type='text'
							name='usernameRegister'
							id='usernameRegister'
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='emailRegister'>Correo electrónico</label>
						<input
							type='email'
							name='emailRegister'
							id='emailRegister'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className={Style.label}>
						<label htmlFor='passwordRegister'>Contraseña</label>
						<input
							type='password'
							name='passwordRegister'
							id='passwordRegister'
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className={Style.boxButton}>
						<button
							id='botonEnviarRegistro'
							type='submit'
							onClick={e => onSubmit(e)}
						>
							Crear cuenta
						</button>
					</div>
				</form>
				<div className={Style.links}>
					<Link to='/login' className='btnChangeWindow'>
						¿Ya tiene cuenta? inicie sesión aquí!
					</Link>
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

Register.propTypes = {
	active: PropTypes.bool,
}

export default Register
