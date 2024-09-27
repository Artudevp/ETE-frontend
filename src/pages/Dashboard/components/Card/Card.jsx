import { Link } from 'react-router-dom'
import habitación from '../../../../assets/habitacion.png'
import Style from './Card.module.css'

function Card() {
	return (
		<div className={Style.card}>
			<img src={habitación} alt='habitacion image' width='auto' height='auto' />
			<div className={Style.cardInfo}>
				<h2>Habitación 2 personas</h2>
				<Link to='/user/dashboard/alojamientos/habitacion'>Ver</Link>
			</div>
		</div>
	)
}

export default Card
