import Style from './Servicios.module.css'

function Servicios() {
	return (
		<div className={Style.main}>
			<div className={Style.services}>
				<h1>Servicios adicionales</h1>
				<div className={Style.servicesList}>
					<div className={Style.serviceBox}>
						<div className={Style.title}>Traslados</div>
						<div className={Style.buttonBox}>
							<button>Ver</button>
						</div>
					</div>
					<div className={Style.serviceBox}>
						<div className={Style.title}>Traslados</div>
						<div className={Style.buttonBox}>
							<button>Ver</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Servicios
