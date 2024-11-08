import habitación from '../../../../assets/habitacion.png'
import Style from './InfoAlojamiento.module.css'
import { useClient } from '../../../../context/ClientProviders'

function InfoAlojamiento() {
	const { hospedajeSelected } = useClient()
	const {
		tipo_hab,
		precio_hab,
		disponibilidad,
		capacidad,
		descripcion_hab,
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
								<h2>{tipo_hab}</h2>
								<p>{descripcion_hab}</p>
								<p className={Style.precioHab}>Precio: ${precio_hab}</p>
								<p>Capacidad: {capacidad}</p>
								<p>Habitaciones disponibles: {disponibilidad}</p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, reserva ahora tu habitación {tipo_hab}</h2>
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
