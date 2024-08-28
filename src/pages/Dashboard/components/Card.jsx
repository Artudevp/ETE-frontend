import habitación from '../../../assets/habitación.png'

function Card() {
	return (
		<div className='rounded-b-xl shadow-lg'>
			<img
				src={habitación}
				alt='habitacion image'
				className='w-72 rounded-t-xl'
				width='auto'
				height='auto'
			/>
			<div className='flex flex-col gap-1 items-center bg-white text-center rounded-b-xl py-2'>
				<h2>Habitación 2 personas</h2>
				<button className='px-10 py-1 rounded border border-green-400 bg-green-200 cursor-pointer'>
					Ver
				</button>
			</div>
		</div>
	)
}

export default Card
