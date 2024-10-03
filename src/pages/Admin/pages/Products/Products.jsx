import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct,
} from '../../../../services/Productos'
import { useState, useEffect } from 'react'

function Products() {
	const title = 'Gestión de Productos'
	const columnsDisplay = ['ID', 'Categoria', 'Nombre', 'Precio', 'Cantidad']
	const columns = [
		'id_producto',
		'categoria',
		'nombre_p',
		'precio_p',
		'cantidad_disponible',
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const productSelectedState = {
		id_producto: '',
		categoria: '',
		nombre_p: '',
		precio_p: '',
		cantidad_disponible: '',
	}

	const [products, setProducts] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [productSelected, setProductSelected] = useState(productSelectedState)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getProducts()
				setProducts(data)
			} catch (error) {
				console.log('Error al obtener productos:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
			setModal(!modal)
			setProductSelected(productSelectedState)
			setContentModal({
				title: 'Agregar Producto',
				button: 'Agregar',
				inputs: [
					{
						type: 'text',
						name: 'categoria',
						placeholder: 'Categoria',
					},
					{
						type: 'text',
						name: 'nombre_p',
						placeholder: 'Nombre Producto',
					},
					{
						type: 'number',
						name: 'precio_p',
						placeholder: 'Precio',
					},
					{
						type: 'number',
						name: 'cantidad_disponible',
						placeholder: 'Cantidad en Stock',
					},
				],
			})
		} else if (action === 'Editar') {
			setModal(!modal)
			setContentModal({
				title: 'Editar Producto',
				button: 'Editar',
				inputs: [
					{
						type: 'text',
						name: 'categoria',
						placeholder: 'Categoria',
					},
					{
						type: 'text',
						name: 'nombre_p',
						placeholder: 'Nombre Producto',
					},
					{
						type: 'number',
						name: 'precio_p',
						placeholder: 'Precio',
					},
					{
						type: 'number',
						name: 'cantidad_disponible',
						placeholder: 'Cantidad en Stock',
					},
				],
			})
		} else if (action === 'Eliminar') {
			setModal(!modal)
			setContentModal({
				title: 'Eliminar Producto',
				button: 'Eliminar',
				inputs: [
					{
						type: 'text',
						name: 'id_producto',
						placeholder: 'ID',
					},
				],
			})
		}
	}

	const handleProducts = async productData => {
		if (contentModal.title === 'Agregar Producto') {
			try {
				const data = await addProduct(productData)
				setProducts([...products, data])
			} catch (error) {
				console.error('Error al agregar producto:', error)
			}
		} else if (contentModal.title === 'Editar Producto') {
			try {
				const data = await updateProduct(productData)
				setProducts(
					products.map(product =>
						product.id_producto === data.id_producto ? data : product,
					),
				)
			} catch (error) {
				console.error('Error al actualizar producto:', error)
			}
		} else if (contentModal.title === 'Eliminar Producto') {
			try {
				await deleteProduct(productData.id_producto)
				setProducts(
					products.filter(
						product => product.id_producto !== productData.id_producto,
					),
				)
			} catch (error) {
				console.error('Error al eliminar producto:', error)
			}
		}
	}

	const handleRowClick = row => {
		setProductSelected({
			categoria: row.categoria || '',
			nombre_p: row.nombre_p || '',
			precio_p: row.precio_p || '',
			cantidad_disponible: row.cantidad_disponible || '',
			id_producto: row.id_producto || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				columnsDisplay={columnsDisplay}
				data={products}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={productSelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleProducts}
				rowSelected={productSelected}
			/>
		</>
	)
}

export default Products
