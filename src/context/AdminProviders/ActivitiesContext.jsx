import { createContext, useContext } from 'react'
import useEntityManagement from '../../hooks/useEntityManagement'
import {
	getActivities,
	addActivity,
	updateActivity,
	deleteActivity,
} from '../../services/Actividades'

export const ActivitiesContext = createContext()

export const useActivities = () => {
	return useContext(ActivitiesContext)
}

export const ActivitiesProvider = ({ children }) => {
	const {
		entities: activities,
		handleSetEntity: handleSetActivities,
		handleUpdateEntity: handleUpdateActivity,
		handleDeleteEntity: handleDeleteActivity,
		errorModal,
	} = useEntityManagement(
		getActivities,
		addActivity,
		updateActivity,
		deleteActivity,
		'actividad',
	)

	return (
		<ActivitiesContext.Provider
			value={{
				activities,
				handleSetActivities,
				handleUpdateActivity,
				handleDeleteActivity,
				errorModal,
			}}
		>
			{children}
		</ActivitiesContext.Provider>
	)
}
