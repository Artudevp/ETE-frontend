import axiosInstance from './axiosInstance'

const getHospitality = async () => {
	try {
		const response = await axiosInstance.get('/hospedajes')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addHospitality = async hospedaje => {
	try {
		const response = await axiosInstance.post('/hospedajes', hospedaje)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateHospitality = async hospedaje => {
	try {
		const response = await axiosInstance.put(
			`/hospedajes/${hospedaje.id}`,
			hospedaje,
		)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteHospitality = async id => {
	try {
		await axiosInstance.delete(`/hospedajes/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getHospitality, addHospitality, updateHospitality, deleteHospitality }
