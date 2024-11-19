import habitación from '../../../../assets/habitacion.png'
import Style from './InfoActividad.module.css'
import { useClient } from '../../../../context/ClientProviders'

function InfoActividad({ children }) {
	const { actividadSelected } = useClient()
	const {
		nombre,
		precio,
		capacidad,
		duracion,
		descripcion,
		disponible,
	} = actividadSelected

	return (
		<div className={Style.main}>
			{disponible ? (
				<>
					<h1>Sobre la actividad</h1>
					<div className={Style.container}>
						<div className={Style.boxLeft}>
							<img src={habitación} alt='Image Actividad' />
							<div className={Style.descripActividad}>
								<h2>{nombre}</h2>
								<p>{descripcion}</p>
								<p className={Style.precioAct}>
									Precio: ${precio} por persona
								</p>
								<p>Capacidad: {capacidad} personas</p>
								<p>Duración: {duracion} horas</p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, y disfruta de la actividad {nombre}</h2>
							<button>Quiero asistir</button>
						</div>
					</div>
				</>
			) : (
				<h1>Actividad no disponible</h1>
			)}
		</div>
	)
}

export default InfoActividad
