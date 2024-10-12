import { useEffect, useState } from 'react'
import Styles from './Error.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import PropTypes from 'prop-types'

function Error({ error }) {
	const { message, details } = error
	const [active, setActive] = useState(false)
	const [showDetails, setShowDetails] = useState(false)

	useEffect(() => {
		if (error) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [error])

	const detailsContainerHeaderClasses = `${Styles.detailsContainerHeader} ${
		showDetails ? Styles.rotate : ''
	}`

	if (details === null) return null

	return (
		<div
			className={Styles.errorContainer}
			style={{
				opacity: active ? '1' : '0',
				pointerEvents: active ? 'all' : 'none',
			}}
		>
			<div className={Styles.error}>
				<h1>Error</h1>
				<p>Lo sentimos, ocurrió un error inesperado: {message}</p>
				<div className={Styles.detailsContainer}>
					<div
						onClick={() => setShowDetails(!showDetails)}
						className={detailsContainerHeaderClasses}
					>
						<p>Ver detalles</p>
						<IoIosArrowDown />
					</div>
					{showDetails && (
						<div className={Styles.details}>
							<p>{details}</p>
						</div>
					)}
				</div>
				<button
					onClick={() => {
						setActive(false)
					}}
				>
					Cerrar
				</button>
			</div>
		</div>
	)
}

Error.propTypes = {
	Error: PropTypes.shape({
		message: PropTypes.string,
		details: PropTypes.string,
	}),
}

export default Error
