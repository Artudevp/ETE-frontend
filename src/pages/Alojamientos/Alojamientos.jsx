import Card from '../Dashboard/components/Card/Card'
import Style from './Alojamientos.module.css'

function Alojamientos() {
	return (
		<div className={Style.containerAlojamientos}>
			<div className={Style.containerAlojamiento}>
				<h1>Alojamientos reservados</h1>
				<div className={Style.alojamientoList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className={Style.containerAlojamiento}>
				<h1>Alojamientos disponibles</h1>
				<div className={Style.alojamientoList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Alojamientos
