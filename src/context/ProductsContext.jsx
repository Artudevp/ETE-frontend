import { createContext, useContext, useState, useEffect } from 'react'
import {
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct,
} from '../services/Productos'

export const ProductsContext = createContext()

export const useProducts = () => {
	return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	const fetchProducts = async () => {
		try {
			const data = await getProducts()
			setProducts(data)
		} catch (error) {
			console.error('Error al obtener productos:', error)
		}
	}

	const handleSetProducts = async productData => {
		try {
			const data = await addProduct(productData)
			setProducts([...products, data])
		} catch (error) {
			console.error('Error al agregar producto:', error)
		}
	}

	const handleUpdateProduct = async productData => {
		try {
			const data = await updateProduct(productData)
			setProducts(
				products.map(product =>
					product.id_producto === productData.id_producto ? data : product,
				),
			)
		} catch (error) {
			console.error('Error al actualizar producto:', error)
		}
	}

	const handleDeleteProduct = async id => {
		try {
			await deleteProduct(id)
			setProducts(products.filter(product => product.id_producto !== id))
		} catch (error) {
			console.error('Error al eliminar producto:', error)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<ProductsContext.Provider
			value={{
				products,
				handleSetProducts,
				handleUpdateProduct,
				handleDeleteProduct,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
