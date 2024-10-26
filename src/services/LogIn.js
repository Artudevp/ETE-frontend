import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const loginService = async (username, contraseña) => {
	try {
		const response = await axios.post('http://localhost:8080/auth/login', {
			username,
			contraseña,
		})
		const token = response.data.token
		const decoded = jwtDecode(token)
		const role = decoded.role
		localStorage.setItem('token', token)
		localStorage.setItem('role', role)
		return role
	} catch (error) {
		console.error('Error en el login:', error.response?.data || error.message)
		throw error
	}
}

export default loginService
