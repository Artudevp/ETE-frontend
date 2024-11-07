import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useRoutes } from '../../../../context/AdminProviders'
import { useState } from 'react'

function RoutesAdmin() {
	const {
		routes,
		handleSetRoutes,
		handleUpdateRoute,
		handleDeleteRoute,
		errorModal,
	} = useRoutes()
	const title = 'Gestión de Rutas'
	const columns = [
		{
			column: 'id_ruta',
			header: 'ID',
		},
		{
			column: 'nombre_ruta',
			header: 'Nombre',
		},
		{
			column: 'duración_ruta',
			header: 'Duración',
		},
		{
			column: 'precio',
			header: 'Precio',
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
	const routeSelectedState = {
		id_ruta: '',
		nombre_ruta: '',
		duración_ruta: '',
		precio: '',
	}

	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [routeSelected, setRouteSelected] = useState(routeSelectedState)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
				setModal(!modal)
				setRouteSelected(routeSelectedState)
				setContentModal({
					title: 'Nuevo Ruta',
					button: 'Crear',
					inputs: [
						{
							type: 'text',
							name: 'nombre_ruta',
							placeholder: 'Nombre',
						},
						{
							type: 'number',
							name: 'duración_ruta',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
					],
				})
				break
			case 'Editar':
				setModal(!modal)
				setContentModal({
					title: 'Editar Ruta',
					button: 'Actualizar',
					inputs: [
						{
							type: 'text',
							name: 'nombre_ruta',
							placeholder: 'Nombre',
						},
						{
							type: 'number',
							name: 'duración_ruta',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
					],
				})
				break
			case 'Eliminar':
				setModal(!modal)
				setContentModal({
					title: 'Eliminar Ruta',
					button: 'Eliminar',
					inputs: [
						{
							type: 'text',
							name: 'id_ruta',
							placeholder: 'ID',
						},
					],
				})
				break
			default:
				break
		}
	}

	const handleRoutes = async routeData => {
		if (contentModal.title === 'Nuevo Ruta') {
			handleSetRoutes(routeData)
		} else if (contentModal.title === 'Editar Ruta') {
			handleUpdateRoute(routeData)
		} else if (contentModal.title === 'Eliminar Ruta') {
			handleDeleteRoute(routeData.id_ruta)
		}
	}

	const handleRowClick = row => {
		setRouteSelected({
			id_ruta: row.id_ruta || '',
			nombre_ruta: row.nombre_ruta || '',
			duración_ruta: row.duración_ruta || '',
			precio: row.precio || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				data={Array.isArray(routes) ? routes : []}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={routeSelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleRoutes}
				rowSelected={routeSelected}
			/>
			<Error error={errorModal} />
		</>
	)
}

export default RoutesAdmin
