import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
import { getHospitality } from '../../services/Hospedajes'

export const AlojamientosContext = createContext()

export const useAlojamientos = () => {
	return useContext(AlojamientosContext)
}

export const AlojamientosProvider = ({ children }) => {
	const [alojamientos, setAlojamientos] = useState([])

	const fetchAlojamientos = useCallback(async () => {
		try {
			const data = await getHospitality()
			setAlojamientos(data)
		} catch (error) {
			console.error(`Error al obtener datos:`, error)
		}
	}, [])

	useEffect(() => {
		fetchAlojamientos()
	}, [])

	return (
		<AlojamientosContext.Provider value={{ alojamientos }}>
			{children}
		</AlojamientosContext.Provider>
	)
}
