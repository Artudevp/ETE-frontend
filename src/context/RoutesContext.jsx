import { createContext, useContext, useState, useEffect } from 'react'
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
	const [routes, setRoutes] = useState([])

	const fetchRoutes = async () => {
		try {
			const data = await getRoutes()
			setRoutes(data)
		} catch (error) {
			console.error('Error al obtener rutas:', error)
		}
	}

	const handleSetRoutes = async routeData => {
		try {
			const data = await addRoute(routeData)
			setRoutes([...routes, data])
		} catch (error) {
			console.error('Error al agregar ruta:', error)
		}
	}

	const handleUpdateRoute = async routeData => {
		try {
			const data = await updateRoute(routeData)
			setRoutes(
				routes.map(route =>
					route.id_ruta === routeData.id_ruta ? data : route,
				),
			)
		} catch (error) {
			console.error('Error al actualizar ruta:', error)
		}
	}

	const handleDeleteRoute = async routeId => {
		try {
			await deleteRoute(routeId)
			setRoutes(routes.filter(route => route.id_ruta !== routeId))
		} catch (error) {
			console.error('Error al eliminar ruta:', error)
		}
	}

	useEffect(() => {
		fetchRoutes()
	}, [])

	return (
		<RoutesContext.Provider
			value={{
				routes,
				fetchRoutes,
				handleSetRoutes,
				handleUpdateRoute,
				handleDeleteRoute,
			}}
		>
			{children}
		</RoutesContext.Provider>
	)
}
