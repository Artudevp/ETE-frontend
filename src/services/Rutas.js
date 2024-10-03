const getRoutes = async () => {
	const response = await fetch('http://localhost:8080/rutas')
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : []
}

const addRoute = async route => {
	const response = await fetch('http://localhost:8080/rutas', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(route),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const updateRoute = async route => {
	const response = await fetch(`http://localhost:8080/rutas/${route.id_ruta}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(route),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const deleteRoute = async id => {
	const response = await fetch(`http://localhost:8080/rutas/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

export { getRoutes, addRoute, updateRoute, deleteRoute }
