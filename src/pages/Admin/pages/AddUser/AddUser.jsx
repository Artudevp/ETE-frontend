import Style from './AddUser.module.css'
import Error from '../../../../components/Error/Error'
import registerAdminService from '../../../../services/RegisterAdmin'
import { useState } from 'react'

const errorModalState = {
	message: null,
	details: null,
}

function AddUser() {
	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [roleSelect, setRoleSelect] = useState('ROLE_USER')
	const [error, setError] = useState(errorModalState)
	const [role, setRole] = useState('')

	const onSubmit = async e => {
		e.preventDefault()
		if (
			[userName, firstName, lastName, email, password].some(
				field => field.length === 0,
			)
		) {
			return setError({
				message: 'Ingrese las credenciales válidas',
				details: 'Los campos no pueden estar vacíos',
			})
		}

		try {
			const getRole = await registerAdminService(
				userName,
				password,
				email,
				firstName,
				lastName,
				roleSelect,
			)
			setRole(getRole)
		} catch (error) {
			setError(error)
		}
	}

	return (
		<>
			<main className={Style.main}>
				<h1>Registrar Usuario</h1>
				<form id='formRegister' className={Style.formRegister}>
					<div className={Style.allLables}>
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
					</div>
					<div className={Style.allLables}>
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
					</div>
					<div className={Style.allLables}>
						<div className={Style.label}>
							<label htmlFor='passwordRegister'>Contraseña</label>
							<input
								type='password'
								name='passwordRegister'
								id='passwordRegister'
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className={Style.label}>
							<label htmlFor='roleRegister'>Rol de usuario</label>
							<select
								name='roleRegister'
								id='roleRegister'
								onChange={e => setRoleSelect(e.target.value)}
							>
								<option value='ROLE_USER'>Rol usuario</option>
								<option value='ROLE_ADMIN'>Rol administrador</option>
							</select>
						</div>
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
					{role && (
						<p style={{ textAlign: 'center' }}>Usuario creado con exito</p>
					)}
				</form>
			</main>
			<Error error={error} />
		</>
	)
}

export default AddUser
