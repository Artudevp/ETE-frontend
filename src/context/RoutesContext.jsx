import { createContext, useContext } from 'react'
import useEntityManagement from '../hooks/useEntityManagement'
import {
	getRoutes,
	addRoute,
	updateRoute,
	deleteRoute,
} from '../services/Rutas'

export const RoutesContext = createContext()

export const useRoutes = () => {
	return useContext(RoutesContext)
}

export const RoutesProvider = ({ children }) => {
	const {
		entities: routes,
		handleSetEntity: handleSetRoutes,
		handleUpdateEntity: handleUpdateRoute,
		handleDeleteEntity: handleDeleteRoute,
	} = useEntityManagement(getRoutes, addRoute, updateRoute, deleteRoute, 'ruta')
	return (
		<RoutesContext.Provider
			value={{
				routes,
				handleSetRoutes,
				handleUpdateRoute,
				handleDeleteRoute,
			}}
		>
			{children}
		</RoutesContext.Provider>
	)
}
