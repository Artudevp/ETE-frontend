import axiosInstance from './axiosInstance'

const getProducts = async () => {
	try {
		const response = await axiosInstance.get('/productos')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addProduct = async product => {
	try {
		const response = await axiosInstance.post('/productos', product)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateProduct = async product => {
	try {
		const response = await axiosInstance.put(
			`/productos/${product.id}`,
			product,
		)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const deleteProduct = async id => {
	try {
		await axiosInstance.delete(`/productos/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getProducts, addProduct, updateProduct, deleteProduct }
