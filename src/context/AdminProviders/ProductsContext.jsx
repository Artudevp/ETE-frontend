import { createContext, useContext } from 'react'
import useEntityManagement from '../../hooks/useEntityManagement'
import {
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct,
} from '../../services/Productos'

export const ProductsContext = createContext()

export const useProducts = () => {
	return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {
	const {
		entities: products,
		handleSetEntity: handleSetProducts,
		handleUpdateEntity: handleUpdateProduct,
		handleDeleteEntity: handleDeleteProduct,
		errorModal,
		handleClearError,
	} = useEntityManagement(
		getProducts,
		addProduct,
		updateProduct,
		deleteProduct,
		'producto',
	)
	return (
		<ProductsContext.Provider
			value={{
				products,
				handleSetProducts,
				handleUpdateProduct,
				handleDeleteProduct,
				errorModal,
				handleClearError,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
