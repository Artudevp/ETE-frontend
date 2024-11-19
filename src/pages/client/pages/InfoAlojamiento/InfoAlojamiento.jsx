import habitación from '../../../../assets/habitacion.png'
import Style from './InfoAlojamiento.module.css'
import { useClient } from '../../../../context/ClientProviders'

function InfoAlojamiento() {
	const { hospedajeSelected } = useClient()
	const {
		tipo,
		precio,
		cantidad,
		capacidad,
		descripcion,
		disponible,
	} = hospedajeSelected

	return (
		<div className={Style.main}>
			{disponible ? (
				<>
					<h1>Sobre la habitación</h1>
					<div className={Style.container}>
						<div className={Style.boxLeft}>
							<img src={habitación} alt='Image habitación' />
							<div className={Style.descripHabitacion}>
								<h2>{tipo}</h2>
								<p>{descripcion}</p>
								<p className={Style.precioHab}>Precio: ${precio}</p>
								<p>Capacidad: <b>{capacidad}</b> personas</p>
								<p>Habitaciones disponibles: <b>{cantidad}</b></p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, reserva ahora tu {tipo}</h2>
							<button>Reservar ahora</button>
						</div>
					</div>
				</>
			) : (
				<h1>Habitación no disponible</h1>
			)}
		</div>
	)
}

export default InfoAlojamiento
