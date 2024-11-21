import axiosInstance from './axiosInstance'

const getActivities = async () => {
	try {
		const response = await axiosInstance.get('/actividades')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addActivity = async activity => {
	try {
		const response = await axiosInstance.post('/actividades', activity)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateActivity = async activity => {
	try {
		const response = await axiosInstance.put(
			`/actividades/${activity.id}`,
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
		await axiosInstance.delete(`/actividades/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getActivities, addActivity, updateActivity, deleteActivity }
