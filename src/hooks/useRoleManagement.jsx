import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function useRoleManagement() {
	const navigate = useNavigate()

	// Función reutilizable dentro del hook
	const handleRole = async ({
		sesionFunction,
		userName,
		password,
		email = '',
		firstName = '',
		lastName = '',
	}) => {
		try {
			const role = await sesionFunction(
				userName,
				password,
				email,
				firstName,
				lastName,
			)

			if (role === 'ROLE_ADMIN') {
				navigate('/admin/dashboard')
			} else if (role === 'ROLE_USER') {
				navigate('/user/dashboard')
			} else {
				throw new Error('Rol no reconocido.')
			}
		} catch (error) {
			console.error('Error:', error)
			alert('Error en el inicio de sesión. Verifique sus credenciales.')
		}
	}

	return { handleRole }
}

useRoleManagement.propTypes = {
	sesionFunction: PropTypes.func.isRequired,
	userName: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	email: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
}

export default useRoleManagement
