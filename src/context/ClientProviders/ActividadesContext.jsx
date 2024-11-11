import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
import { getActivities } from '../../services/Actividades'

export const ActividadesContext = createContext()

export const useActividades = () => {
	return useContext(ActividadesContext)
}

export const ActividadesProvider = ({ children }) => {
	const [actividades, setActividades] = useState([])

	const fetchActividades = useCallback(async () => {
		try {
			const data = await getActivities()
			setActividades(data)
		} catch (error) {
			console.error(`Error al obtener datos:`, error)
		}
	}, [])

	useEffect(() => {
		fetchActividades()
	}, [])

	return (
		<ActividadesContext.Provider value={{ actividades }}>
			{children}
		</ActividadesContext.Provider>
	)
}
