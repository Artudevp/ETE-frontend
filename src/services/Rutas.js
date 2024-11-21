import axiosInstance from './axiosInstance'

const getRoutes = async () => {
	try {
		const response = await axiosInstance.get('/rutas')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addRoute = async route => {
	try {
		const response = await axiosInstance.post('/rutas', route)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateRoute = async route => {
	try {
		const response = await axiosInstance.put(`/rutas/${route.id}`, route)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteRoute = async id => {
	try {
		await axiosInstance.delete(`/rutas/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getRoutes, addRoute, updateRoute, deleteRoute }
