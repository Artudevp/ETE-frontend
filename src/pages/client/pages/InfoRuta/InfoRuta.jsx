import habitación from '../../../../assets/habitacion.png'
import Style from './InfoRuta.module.css'
import { useClient } from '../../../../context/ClientProviders'

export function InfoRuta() {
	const { rutaSelected } = useClient()
	const { nombre, precio, capacidad, duración, descripcion, disponible } =
		rutaSelected

	return (
		<div className={Style.main}>
			{disponible ? (
				<>
					<h1>Sobre la ruta</h1>
					<div className={Style.container}>
						<div className={Style.boxLeft}>
							<img src={habitación} alt='Image Ruta' />
							<div className={Style.descripRuta}>
								<h2>{nombre}</h2>
								<p>{descripcion}</p>
								<p className={Style.precioRuta}>
									Precio: ${precio} por persona
								</p>
								<p>Capacidad: {capacidad} personas</p>
								<p>Duración: {duración} horas</p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, y disfruta de la ruta {nombre}</h2>
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
