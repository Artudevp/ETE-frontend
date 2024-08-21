import { Link } from 'react-router-dom'

function Register({ active }) {
	return (
		<div
			className='text-white flex bg-opacity-50 bg-black items-center justify-center fixed top-0 left-0 h-full w-full transition-opacity duration-300 z-20'
			style={{
				opacity: active ? '1' : '0',
				pointerEvents: active ? 'all' : 'none',
			}}
		>
			<div className=' bg-neutral-800 max-w-md p-9 rounded-md text-center mx-5 flex flex-col gap-6 relative pt-14 w-full'>
				<img
					src='./icon.png'
					alt='Icon EcoTourExpress'
					className='absolute w-24 -top-12 left-[40%]'
				/>
				<h1 className='text-4xl'>Registro</h1>
				<form
					noValidate
					id='formRegister'
					action='#'
					className='flex flex-col gap-5'
				>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='nameRegister' className='text-lg'>
							Nombre completo
						</label>
						<input
							type='text'
							name='nameRegister'
							id='nameRegister'
							className='w-full bg-transparent border-2 border-green-500 rounded p-1'
						/>
					</div>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='emailRegister' className='text-lg'>
							Correo electrónico
						</label>
						<input
							type='email'
							name='emailRegister'
							id='emailRegister'
							className='w-full bg-transparent border-2 border-green-500 rounded p-1'
						/>
					</div>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='passwordRegister' className='text-lg'>
							Contraseña
						</label>
						<input
							type='password'
							name='passwordRegister'
							id='passwordRegister'
							className='w-full bg-transparent border-2 border-green-500 rounded p-1'
						/>
					</div>
					<div className='flex justify-center'>
						<button
							id='botonEnviarRegistro'
							type='submit'
							className='text-lg py-2 px-4 border-2 border-green-500 rounded'
						>
							Crear cuenta
						</button>
					</div>
				</form>
				<div className='flex flex-col gap-2'>
					<Link to='/login' className='btnChangeWindow'>
						¿Ya tiene cuenta? inicie sesión aquí!
					</Link>
				</div>
				<Link
					to='/'
					className='closeButtons absolute right-3 top-3 cursor-pointer'
				>
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
