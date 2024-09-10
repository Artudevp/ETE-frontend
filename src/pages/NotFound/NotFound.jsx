import { Link } from 'react-router-dom'
import Icon from '/public/icon.png'

function NotFound() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center gap-2'>
			<img src={Icon} alt='Icon Eco Tour Express' className='size-60' />
			<h1 className='font-bold text-2xl'>
				<span className='text-green-500'>404</span> - Página no encontrada
			</h1>
			<p className='text-xl'>Lo sentimos, la página que buscas no existe.</p>
			<Link className='text-xl' to='/dashboard/alojamientos'>
				Volver al{' '}
				<span className='text-green-500 font-bold cursor-pointer'>
					Dashboard
				</span>
			</Link>
		</div>
	)
}

export default NotFound
