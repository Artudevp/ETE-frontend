import Card from '../Dashboard/components/Card'

function Actividades() {
	return (
		<div className='w-full pt-5 flex flex-col gap-7'>
			<div className='flex flex-col gap-3'>
				<h1 className='font-bold text-3xl'>Actividades por asistir</h1>
				<div className='ml-5 w-fit flex gap-5'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<h1 className='font-bold text-3xl'>Actividades disponibles</h1>
				<div className='ml-5 w-fit flex gap-5'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Actividades
