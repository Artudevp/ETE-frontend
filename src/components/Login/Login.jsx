import { Link } from 'react-router-dom'

function Login({ active }) {
	const onSubmit = e => {
		e.preventDefault()
		window.location = '/dashboard'
	}

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
				<h1 className='text-4xl'>Iniciar Sesión</h1>
				<form noValidate id='formLogin' className='flex flex-col gap-5'>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='emailLogin' className='text-lg'>
							Correo electrónico
						</label>
						<input
							type='email'
							name='emailLogin'
							id='emailLogin'
							className='w-full bg-transparent border-2 border-green-500 rounded p-1'
						/>
					</div>
					<div className='flex flex-col items-start gap-1'>
						<label htmlFor='passwordLogin' className='text-lg'>
							Contraseña
						</label>
						<input
							type='password'
							name='passwordLogin'
							id='passwordLogin'
							className='w-full bg-transparent border-2 border-green-500 rounded p-1'
						/>
					</div>
					<div className='flex justify-center'>
						<button
							id='botonEnviarLogin'
							type='submit'
							className='text-lg py-2 px-4 border-2 border-green-500 rounded'
							onClick={e => onSubmit(e)}
						>
							Ingresar
						</button>
					</div>
				</form>
				<div className='flex flex-col gap-2'>
					<a href='#'>¿Olvidó sus credenciales?</a>
					<Link to='/register'>¿Eres nuevo? Crea una cuenta ahora mismo!</Link>
				</div>
				<Link to='/' className='absolute right-3 top-3 cursor-pointer'>
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

export default Login
