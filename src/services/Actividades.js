const getActivities = async () => {
	const response = await fetch('http://localhost:8080/actividades')
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : []
}

const addActivity = async activity => {
	const response = await fetch('http://localhost:8080/actividades', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(activity),
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const updateActivity = async activity => {
	const response = await fetch(
		`http://localhost:8080/actividades/${activity.id_actividad}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(activity),
		},
	)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

const deleteActivity = async id => {
	const response = await fetch(`http://localhost:8080/actividades/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}
	const text = await response.text()
	return text ? JSON.parse(text) : {}
}

export { getActivities, addActivity, updateActivity, deleteActivity }
