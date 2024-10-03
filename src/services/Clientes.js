const getClients = async () => {
	const response = await fetch('http://localhost:8080/clientes')
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : []
}

const addClient = async client => {
	const response = await fetch('http://localhost:8080/clientes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(client),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const updateClient = async client => {
	const response = await fetch(
		`http://localhost:8080/clientes/${client.id_cliente}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(client),
		},
	)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const deleteClient = async id => {
	const response = await fetch(`http://localhost:8080/clientes/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

export { getClients, addClient, updateClient, deleteClient }
