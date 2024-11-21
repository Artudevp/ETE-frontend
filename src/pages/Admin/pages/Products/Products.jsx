import PageSchema from '../PageSchema/PageSchema'
import { ModalAdmin } from '../../components'
import { useProducts } from '../../../../context/AdminProviders'
import { useState } from 'react'
import Error from '../../../../components/Error/Error'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Products() {
	const {
		products,
		handleSetProducts,
		handleUpdateProduct,
		handleDeleteProduct,
		errorModal,
		handleClearError,
	} = useProducts()
	const title = 'Gestión de Productos'
	const columns = [
		{
			column: 'id',
			header: 'ID',
		},
		{
			column: 'categoria',
			header: 'Categoria',
		},
		{
			column: 'nombre',
			header: 'Nombre',
		},
		{
			column: 'precio',
			header: 'Precio',
		},
		{
			column: 'cantidad',
			header: 'Cantidad',
		},
		{
			column: 'descripcion',
			header: 'Descripción',
		},
	]
	const actions = [
		{
			label: 'Nuevo',
			icon: 'pi pi-fw pi-plus',
		},
		{
			label: 'Editar',
			icon: 'pi pi-fw pi-pencil',
		},
		{
			label: 'Eliminar',
			icon: 'pi pi-fw pi-trash',
		},
	]
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const productSelectedState = {
		id: '',
		categoria: '',
		nombre: '',
		precio: '',
		cantidad: '',
		descripcion: '',
	}
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [productSelected, setProductSelected] = useState(productSelectedState)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
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
							name: 'nombre',
							placeholder: 'Nombre Producto',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: 'number',
							name: 'cantidad',
							placeholder: 'Cantidad en Stock',
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'Descripción',
						},
					],
				})
				break
			case 'Editar':
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
							name: 'nombre',
							placeholder: 'Nombre Producto',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: 'number',
							name: 'cantidad',
							placeholder: 'Cantidad en Stock',
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'Descripción',
						},
					],
				})
				break
			case 'Eliminar':
				if (productSelected.id) {
					handleDeleteProduct(productSelected.id)
					toast.error('El producto se ha eliminado')
				} else {
					toast.error('No se seleccionó un producto para eliminar')
				}
				break
			default:
				break
		}
	}

	const handleProducts = async productData => {
		if (contentModal.title === 'Agregar Producto') {
			handleSetProducts(productData)
			toast.success('Producto agregado con éxito')
		} else if (contentModal.title === 'Editar Producto') {
			handleUpdateProduct(productData)
			toast.info('Producto actualizado con éxito')
		}
	}

	const handleRowClick = row => {
		setProductSelected({
			categoria: row.categoria || '',
			nombre: row.nombre || '',
			precio: row.precio || '',
			cantidad: row.cantidad || '',
			id: row.id || '',
			descripcion: row.descripcion || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				data={Array.isArray(products) ? products : []}
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
			<Error error={errorModal} clearErrors={handleClearError} />
		</>
	)
}
