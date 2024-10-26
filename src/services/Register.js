import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const registerService = async (
	username,
	contraseña,
	correo,
	nombre,
	apellido,
) => {
	try {
		const response = await axios.post('http://localhost:8080/auth/register', {
			username,
			correo,
			contraseña,
			nombre,
			apellido,
		})
		const token = response.data.token
		const decoded = jwtDecode(token)
		const role = decoded.role
		localStorage.setItem('token', token)
		localStorage.setItem('role', role)
		return role
	} catch (error) {
		console.error(
			'Error en el registro:',
			error.response?.data || error.message,
		)
		throw error
	}
}

export default registerService
