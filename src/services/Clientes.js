import axiosInstance from './axiosInstance'

const getClients = async () => {
	try {
		const response = await axiosInstance.get('/clientes')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addClient = async client => {
	try {
		const response = await axiosInstance.post('/clientes', client)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateClient = async client => {
	try {
		const response = await axiosInstance.put(`/clientes/${client.id}`, client)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteClient = async id => {
	try {
		await axiosInstance.delete(`/clientes/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getClients, addClient, updateClient, deleteClient }
