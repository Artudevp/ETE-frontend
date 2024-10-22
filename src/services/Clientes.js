import axiosInstancie from './axiosInstancie'

const getClients = async () => {
	try {
		const response = await axiosInstancie.get('/clientes')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addClient = async client => {
	try {
		const response = await axiosInstancie.post('/clientes', client)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateClient = async client => {
	try {
		const response = await axiosInstancie.put(
			`/clientes/${client.id_cliente}`,
			client,
		)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteClient = async id => {
	try {
		await axiosInstancie.delete(`/clientes/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getClients, addClient, updateClient, deleteClient }
