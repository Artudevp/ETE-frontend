const getHospitality = async () => {
	const response = await fetch('http://localhost:8080/hospedajes')
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : []
}

const addHospitality = async hospedaje => {
	const response = await fetch('http://localhost:8080/hospedajes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(hospedaje),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const updateHospitality = async hospedaje => {
	const response = await fetch(
		`http://localhost:8080/hospedajes/${hospedaje.id_hospedaje}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(hospedaje),
		},
	)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const deleteHospitality = async id => {
	const response = await fetch(`http://localhost:8080/hospedajes/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

export { getHospitality, addHospitality, updateHospitality, deleteHospitality }
