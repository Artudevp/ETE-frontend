import habitación from '../../assets/habitacion.png'

function InfoAlojamiento() {
	return (
		<div className='w-full pt-5 flex flex-col gap-3'>
			<h1 className='font-bold text-3xl'>Sobre la habitación</h1>
			<div className='text-lg flex flex-wrap gap-5'>
				<div className='w-1/2 flex flex-col gap-5'>
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
						<div>
							<div className='bg-green-100 p-5 rounded-md flex flex-col gap-1 max-w-2xl w-full shadow-lg'>
								<h3 className='font-bold'>Usuario</h3>
								<p>
									Estadía super cómoda, cuenta con un amplio espacio para estar
									comodo!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2>Elige tu fecha de estadía</h2>
				</div>
			</div>
		</div>
	)
}

export default InfoAlojamiento
