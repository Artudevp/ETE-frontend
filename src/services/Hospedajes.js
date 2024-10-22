import axiosInstancie from './axiosInstancie'

const getHospitality = async () => {
	try {
		const response = await axiosInstancie.get('/hospedajes')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addHospitality = async hospedaje => {
	try {
		const response = await axiosInstancie.post('/hospedajes', hospedaje)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateHospitality = async hospedaje => {
	try {
		const response = await axiosInstancie.put(
			`/hospedajes/${hospedaje.id_hospedaje}`,
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
		await axiosInstancie.delete(`/hospedajes/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getHospitality, addHospitality, updateHospitality, deleteHospitality }
