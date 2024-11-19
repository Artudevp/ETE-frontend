import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
import { getProducts } from '../../services/Productos'

export const ProductosContext = createContext()

export const useProductos = () => {
	return useContext(ProductosContext)
}

export const ProductosProvider = ({ children }) => {
	const [productos, setProductos] = useState([])

	const fetchProductos = useCallback(async () => {
		try {
			const data = await getProducts()
			setProductos(data)
		} catch (error) {
			console.error(`Error al obtener datos:`, error)
		}
	}, [])

	useEffect(() => {
		fetchProductos()
	}, [])

	return (
		<ProductosContext.Provider value={{ productos }}>{children}</ProductosContext.Provider>
	)
}
