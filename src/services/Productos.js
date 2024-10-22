import axiosInstancie from './axiosInstancie'

const getProducts = async () => {
	try {
		const response = await axiosInstancie.get('/productos')
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const addProduct = async product => {
	try {
		const response = await axiosInstancie.post('/productos', product)
		return response.data
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

const updateProduct = async product => {
	try {
		const response = await axiosInstancie.put(
			`/productos/${product.id_producto}`,
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
		await axiosInstancie.delete(`/productos/${id}`)
	} catch (error) {
		throw new Error(
			`HTTP error! status: ${error.request.status}, message: ${error.message}`,
		)
	}
}

export { getProducts, addProduct, updateProduct, deleteProduct }
