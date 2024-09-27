import { Link } from 'react-router-dom'
import Style from './Register.module.css'

function Register({ active }) {
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
						<label htmlFor='nameRegister'>Nombre completo</label>
						<input type='text' name='nameRegister' id='nameRegister' />
					</div>
					<div className={Style.label}>
						<label htmlFor='emailRegister'>Correo electrónico</label>
						<input type='email' name='emailRegister' id='emailRegister' />
					</div>
					<div className={Style.label}>
						<label htmlFor='passwordRegister'>Contraseña</label>
						<input
							type='password'
							name='passwordRegister'
							id='passwordRegister'
						/>
					</div>
					<div className={Style.boxButton}>
						<button id='botonEnviarRegistro' type='submit'>
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

export default Register
