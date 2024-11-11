import Style from './Rutas.module.css'
import Card from '../../components/Card/Card'
import { useRutas, useClient } from '../../../../context/ClientProviders'

function Rutas() {
	const { rutas } = useRutas()
	const { setRutaSelected } = useClient()

	const handleRutaSelected = ruta => {
		setRutaSelected(ruta)
	}

	return (
		<div className={Style.containerRutas}>
			{/* <div className={Style.containerRuta}>
				<h1>Rutas por asistir</h1>
				<div className={Style.rutaList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div> */}
			<div className={Style.containerRuta}>
				<h1>Rutas disponibles</h1>
				<div className={Style.rutaList}>
					{rutas?.length > 0 ? (
						rutas.map(
							(item, index) =>
								item.disponible && (
									<Card
										key={index}
										tipo_prod={item.nombre_ruta}
										precio_prod={item.precio}
										producto={item}
										handleHospedajeSelected={handleRutaSelected}
										ruta='rutas/ruta'
									/>
								),
						)
					) : (
						<p>No hay rutas disponibles</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default Rutas
