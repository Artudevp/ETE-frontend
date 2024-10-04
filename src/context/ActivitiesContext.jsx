import { createContext, useContext, useState, useEffect } from 'react'
import {
	getActivities,
	addActivity,
	updateActivity,
	deleteActivity,
} from '../services/Actividades'

export const ActivitiesContext = createContext()

export const useActivities = () => {
	return useContext(ActivitiesContext)
}

export const ActivitiesProvider = ({ children }) => {
	const [activities, setActivities] = useState([])

	const fetchActivities = async () => {
		try {
			const data = await getActivities()
			setActivities(data)
		} catch (error) {
			console.error('Error al obtener actividades:', error)
		}
	}

	const handleSetActivities = async activityData => {
		try {
			const data = await addActivity(activityData)
			setActivities([...activities, data])
		} catch (error) {
			console.error('Error al agregar actividad:', error)
		}
	}

	const handleUpdateActivity = async activityData => {
		try {
			const data = await updateActivity(activityData)
			setActivities(
				activities.map(activity =>
					activity.id_actividad === activityData.id_actividad ? data : activity,
				),
			)
		} catch (error) {
			console.error('Error al actualizar actividad:', error)
		}
	}

	const handleDeleteActivity = async id => {
		try {
			await deleteActivity(id)
			setActivities(activities.filter(activity => activity.id_actividad !== id))
		} catch (error) {
			console.error('Error al eliminar actividad:', error)
		}
	}

	useEffect(() => {
		fetchActivities()
	}, [])

	return (
		<ActivitiesContext.Provider
			value={{
				activities,
				handleSetActivities,
				handleUpdateActivity,
				handleDeleteActivity,
			}}
		>
			{children}
		</ActivitiesContext.Provider>
	)
}
