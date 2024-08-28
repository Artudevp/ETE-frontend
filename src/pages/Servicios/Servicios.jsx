import Card from '../Dashboard/components/Card'

function Servicios() {
	return (
		<div className='w-full pt-5 flex flex-col gap-7'>
			<div className='flex flex-col gap-3'>
				<h1 className='font-bold text-3xl'>Servicios adicionales</h1>
				<div className='ml-5 w-fit flex gap-5'>
					<div className='w-60 text-center flex flex-col items-center gap-2 shadow-lg rounded-xl'>
						<div className='h-28 flex justify-center items-center font-bold text-2xl'>
							Traslados
						</div>
						<div className='py-2'>
							<button className='px-10 py-1 rounded border border-green-400 bg-green-200 cursor-pointer'>
								Ver
							</button>
						</div>
					</div>
					<div className='w-60 text-center flex flex-col items-center gap-2 shadow-lg rounded-xl'>
						<div className='h-28 flex justify-center items-center font-bold text-2xl'>
							Traslados
						</div>
						<div className='py-2'>
							<button className='px-10 py-1 rounded border border-green-400 bg-green-200 cursor-pointer'>
								Ver
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Servicios
