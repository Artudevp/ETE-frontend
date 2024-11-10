import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
import { getRoutes } from '../../services/Rutas'

export const RutasContext = createContext()

export const useRutas = () => {
	return useContext(RutasContext)
}

export const RutasProvider = ({ children }) => {
	const [rutas, setRutas] = useState([])

	const fetchRutas = useCallback(async () => {
		try {
			const data = await getRoutes()
			setRutas(data)
		} catch (error) {
			console.error(`Error al obtener datos:`, error)
		}
	}, [])

	useEffect(() => {
		fetchRutas()
	}, [])

	return (
		<RutasContext.Provider value={{ rutas }}>{children}</RutasContext.Provider>
	)
}
