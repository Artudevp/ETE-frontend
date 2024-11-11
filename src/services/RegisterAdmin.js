import axiosInstance from './axiosInstance'
import { jwtDecode } from 'jwt-decode'

const registerAdminService = async (
	username,
	contraseña,
	correo,
	nombre,
	apellido,
	rol,
) => {
	console.log({
		username,
		correo,
		contraseña,
		nombre,
		apellido,
		rol,
	})
	try {
		const response = await axiosInstance.post(
			'http://localhost:8080/auth/register',
			{
				username,
				correo,
				contraseña,
				nombre,
				apellido,
				rol,
			},
		)
		const token = response.data.token
		const decoded = jwtDecode(token)
		const role = decoded.role
		return role
	} catch (error) {
		console.error(
			'Error en el registro:',
			error.response?.data || error.message,
		)
		throw error
	}
}

export default registerAdminService
