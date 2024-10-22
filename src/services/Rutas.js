import axiosInstancie from './axiosInstancie'

const getRoutes = async () => {
	try {
		const response = await axiosInstancie.get('/rutas')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addRoute = async route => {
	try {
		const response = await axiosInstancie.post('/rutas', route)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateRoute = async route => {
	try {
		const response = await axiosInstancie.put(`/rutas/${route.id_ruta}`, route)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteRoute = async id => {
	try {
		await axiosInstancie.delete(`/rutas/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getRoutes, addRoute, updateRoute, deleteRoute }
