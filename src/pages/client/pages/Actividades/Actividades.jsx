import Style from './Actividades.module.css'
import { Card } from '../../components'
import { useActividades, useClient } from '../../../../context/ClientProviders'

export function Actividades() {
	const { actividades } = useActividades()
	const { setActividadSelected } = useClient()

	const handleActividadSelected = actividad => {
		setActividadSelected(actividad)
	}

	return (
		<div className={Style.containerActividades}>
			{/* <div className={Style.containerActividad}>
				<h1>Actividades por asistir</h1>
				<div className={Style.actividadList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div> */}
			<div className={Style.containerActividad}>
				<h1>Actividades disponibles</h1>
				<div className={Style.actividadList}>
					{actividades?.length > 0 ? (
						actividades.map(
							(item, index) =>
								item.disponible && (
									<Card
										key={index}
										tipo_prod={item.nombre}
										precio_prod={item.precio}
										producto={item}
										handleHospedajeSelected={handleActividadSelected}
										ruta='actividades/actividad'
									/>
								),
						)
					) : (
						<p>No hay actividades disponibles</p>
					)}
				</div>
			</div>
		</div>
	)
}
