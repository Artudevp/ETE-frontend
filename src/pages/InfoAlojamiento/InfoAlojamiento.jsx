import habitación from '../../assets/habitacion.png'
import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { FaRegUserCircle } from 'react-icons/fa'
import { Rating } from 'primereact/rating'

function InfoAlojamiento() {
	const [date, setDate] = useState(null)
	const [valueStar, setValueStar] = useState(4)
	return (
		<div className='w-full h-full pt-5 flex flex-col gap-3'>
			<h1 className='font-bold text-3xl'>Sobre la habitación</h1>
			<div className='text-lg flex flex-wrap gap-20 mr-10 lg:mr-0'>
				<div className='w-full flex flex-col gap-5 lg:w-2/5'>
					<img
						className='w-full rounded-xl'
						src={habitación}
						alt='Image habitación'
					/>
					<div className='flex flex-col gap-2'>
						<h2 className='font-bold text-2xl'>Habitación 2 personas</h2>
						<p>
							Cuenta con un espacio amplio para que pases tu estadía lo más
							cómodo posible, cuenta con una sala de estar con sus muebles para
							pasar la tarde en familia.
						</p>
						<p>
							La habitación cuenta con una cama matrimonial, dos camas
							individuales.
						</p>
						<p className='font-bold text-xl'>Precio: $30</p>
					</div>
					<div className='flex flex-col gap-3'>
						<h2 className='font-bold text-2xl'>Calificaciones</h2>
						<div className='flex flex-col gap-4'>
							<div className='bg-green-100 p-5 rounded-md flex flex-col gap-1 max-w-2xl w-full shadow-lg'>
								<div className='flex flex-row items-center gap-3'>
									<FaRegUserCircle />
									<h3 className='font-bold'>Usuario</h3>
									<Rating
										value={valueStar}
										onChange={e => setValueStar(e.value)}
										cancel={false}
									/>
								</div>
								<p>
									Estadía super cómoda, cuenta con un amplio espacio para estar
									comodo!
								</p>
							</div>
							<div className='bg-green-100 p-5 rounded-md flex flex-col gap-1 max-w-2xl w-full shadow-lg'>
								<div className='flex flex-row items-center gap-3'>
									<FaRegUserCircle />
									<h3 className='font-bold'>Usuario</h3>
									<Rating
										value={valueStar}
										onChange={e => setValueStar(e.value)}
										cancel={false}
									/>
								</div>
								<p>
									Estadía super cómoda, cuenta con un amplio espacio para estar
									comodo!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col gap-3 items-center lg:w-2/5'>
					<h2 className='font-bold text-2xl'>Elige tu fecha de estadía</h2>
					<Calendar
						value={date}
						onChange={e => setDate(e.value)}
						inline
						showWeek
						selectionMode='range'
						className='border-solid border-2 rounded-lg shadow-lg p-3 w-full max-w-md'
					/>
					<button className='bg-green-100 w-fit px-5 py-2 rounded-md border-2 border-green-200'>
						Reservar ahora
					</button>
				</div>
			</div>
		</div>
	)
}

export default InfoAlojamiento
