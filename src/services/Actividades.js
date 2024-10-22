import axiosInstancie from './axiosInstancie'

const getActivities = async () => {
	try {
		const response = await axiosInstancie.get('/actividades')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addActivity = async activity => {
	try {
		const response = await axiosInstancie.post('/actividades', activity)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateActivity = async activity => {
	try {
		const response = await axiosInstancie.put(
			`/actividades/${activity.id_actividad}`,
			activity,
		)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteActivity = async id => {
	try {
		await axiosInstancie.delete(`/actividades/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getActivities, addActivity, updateActivity, deleteActivity }
