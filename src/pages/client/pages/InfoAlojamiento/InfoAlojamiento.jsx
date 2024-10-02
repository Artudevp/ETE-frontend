import habitación from '../../../../assets/habitacion.png'
import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import Style from './InfoAlojamiento.module.css'

function InfoAlojamiento() {
	const [date, setDate] = useState(null)
	const [valueStar, setValueStar] = useState(4)
	return (
		<div className={Style.main}>
			<h1>Sobre la habitación</h1>
			<div className={Style.container}>
				<div className={Style.boxLeft}>
					<img src={habitación} alt='Image habitación' />
					<div className={Style.descripHabitacion}>
						<h2>Habitación 2 personas</h2>
						<p>
							Cuenta con un espacio amplio para que pases tu estadía lo más
							cómodo posible, cuenta con una sala de estar con sus muebles para
							pasar la tarde en familia.
						</p>
						<p>
							La habitación cuenta con una cama matrimonial, dos camas
							individuales.
						</p>
						<p className={Style.precioHab}>Precio: $30</p>
					</div>
					<div className={Style.calificacionHab}>
						<h2>Calificaciones</h2>
						<div className={Style.calificacionList}>
							<div className={Style.calificacionBox}>
								<div className={Style.userName}>
									<FaRegUserCircle />
									<h3>Usuario</h3>
								</div>
								<p>
									Estadía super cómoda, cuenta con un amplio espacio para estar
									comodo!
								</p>
							</div>
							<div className={Style.calificacionBox}>
								<div className={Style.userName}>
									<FaRegUserCircle />
									<h3>Usuario</h3>
								</div>
								<p>
									Estadía super cómoda, cuenta con un amplio espacio para estar
									comodo!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={Style.boxRight}>
					<h2>Elige tu fecha de estadía</h2>

					<button>Reservar ahora</button>
				</div>
			</div>
		</div>
	)
}

export default InfoAlojamiento
