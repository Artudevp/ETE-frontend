import Style from './Alojamientos.module.css'
import { Card } from '../../components'
import { useAlojamientos, useClient } from '../../../../context/ClientProviders'

export function Alojamientos() {
	const { alojamientos } = useAlojamientos()
	const { setHospedajeSelected } = useClient()

	const handleHospedajeSelected = hospedaje => {
		setHospedajeSelected(hospedaje)
	}

	return (
		<div className={Style.containerAlojamientos}>
			{/* <div className={Style.containerAlojamiento}>
				<h1>Alojamientos reservados</h1>
				<div className={Style.alojamientoList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div> */}
			<div className={Style.containerAlojamiento}>
				<h1>Alojamientos disponibles</h1>
				<div className={Style.alojamientoList}>
					{alojamientos?.length > 0 ? (
						alojamientos.map(
							(item, index) =>
								item.disponible && (
									<Card
										key={index}
										tipo_prod={item.tipo}
										precio_prod={item.precio}
										producto={item}
										handleHospedajeSelected={handleHospedajeSelected}
										ruta='alojamientos/habitacion'
									/>
								),
						)
					) : (
						<p>No hay alojamientos disponibles</p>
					)}
				</div>
			</div>
		</div>
	)
}
