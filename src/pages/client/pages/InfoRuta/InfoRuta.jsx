import habitación from '../../../../assets/habitacion.png'
import Style from './InfoRuta.module.css'
import { useClient } from '../../../../context/ClientProviders'

function InfoRuta() {
	const { rutaSelected } = useClient()
	const {
		nombre_ruta,
		precio,
		capacidad,
		duración_ruta,
		descripcion_ruta,
		disponible,
	} = rutaSelected

	return (
		<div className={Style.main}>
			{disponible ? (
				<>
					<h1>Sobre la ruta</h1>
					<div className={Style.container}>
						<div className={Style.boxLeft}>
							<img src={habitación} alt='Image Ruta' />
							<div className={Style.descripRuta}>
								<h2>{nombre_ruta}</h2>
								<p>{descripcion_ruta}</p>
								<p className={Style.precioRuta}>
									Precio: ${precio} por persona
								</p>
								<p>Capacidad: {capacidad} personas</p>
								<p>Duración: {duración_ruta} horas</p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, y disfruta de la ruta {nombre_ruta}</h2>
							<button>Quiero asistir</button>
						</div>
					</div>
				</>
			) : (
				<h1>Ruta no disponible</h1>
			)}
		</div>
	)
}

export default InfoRuta
