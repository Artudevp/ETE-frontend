import axiosInstancie from './axiosInstancie'

const getUsers = async () => {
	try {
		const response = await axiosInstancie.get('/usuarios')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addUser = async user => {
	try {
		const response = await axiosInstancie.post('/usuarios', user)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateUser = async user => {
	try {
		const response = await axiosInstancie.put(
			`/usuarios/${user.id_usuario}`,
			user,
		)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteUser = async id => {
	try {
		await axiosInstancie.delete(`/usuarios/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getUsers, addUser, updateUser, deleteUser }
