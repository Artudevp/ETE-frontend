import axiosInstance from './axiosInstance'

const getUsers = async () => {
	try {
		const response = await axiosInstance.get('/users')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addUser = async user => {
	try {
		const response = await axiosInstance.post('/users', user)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateUser = async user => {
	try {
		const response = await axiosInstance.put(`/users/${user.id}`, user)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteUser = async id => {
	try {
		await axiosInstance.delete(`/users/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getUsers, addUser, updateUser, deleteUser }
