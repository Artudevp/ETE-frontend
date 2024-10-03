const getProducts = async () => {
	const response = await fetch('http://localhost:8080/productos')
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : []
}

const addProduct = async product => {
	const response = await fetch('http://localhost:8080/productos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const updateProduct = async product => {
	const response = await fetch(
		`http://localhost:8080/productos/${product.id_producto}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		},
	)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const deleteProduct = async id => {
	const response = await fetch(`http://localhost:8080/productos/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

export { getProducts, addProduct, updateProduct, deleteProduct }
