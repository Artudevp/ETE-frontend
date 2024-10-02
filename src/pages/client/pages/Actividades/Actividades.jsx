import Card from '../../components/Card/Card'
import Style from './Actividades.module.css'

function Actividades() {
	return (
		<div className={Style.containerActividades}>
			<div className={Style.containerActividad}>
				<h1>Actividades por asistir</h1>
				<div className={Style.actividadList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className={Style.containerActividad}>
				<h1>Actividades disponibles</h1>
				<div className={Style.actividadList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Actividades
