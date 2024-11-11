import { Link } from 'react-router-dom'
import habitación from '../../../../assets/habitacion.png'
import Style from './Card.module.css'

function Card({
	tipo_prod,
	precio_prod,
	producto,
	handleHospedajeSelected,
	ruta,
}) {
	return (
		<div className={Style.card}>
			<img src={habitación} alt='habitacion image' width='auto' height='auto' />
			<div className={Style.cardInfo}>
				<h2>{tipo_prod}</h2>
				<p>{precio_prod}</p>
				<Link
					to={`/user/dashboard/${ruta}`}
					onClick={() => handleHospedajeSelected(producto)}
				>
					Ver
				</Link>
			</div>
		</div>
	)
}

export default Card
