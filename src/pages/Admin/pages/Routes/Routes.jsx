import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getRoutes,
	addRoute,
	updateRoute,
	deleteRoute,
} from '../../../../services/Rutas'
import { useState, useEffect } from 'react'

function RoutesAdmin() {
	const title = 'Gestión de Rutas'
	const columnsDisplay = ['ID', 'Nombre', 'Duración', 'Precio']
	const columns = ['id_ruta', 'nombre_ruta', 'duración_ruta', 'precio']
	const actions = ['Nuevo', 'Editar', 'Eliminar']
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

	const [routes, setRoutes] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [routeSelected, setRouteSelected] = useState(routeSelectedState)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getRoutes()
				setRoutes(data)
				console.log(data)
			} catch (error) {
				console.log('Error al obtener rutas:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
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
		} else if (action === 'Editar') {
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
		} else if (action === 'Eliminar') {
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
		}
	}

	const handleRoutes = async routeData => {
		if (contentModal.title === 'Nuevo Ruta') {
			try {
				const data = await addRoute(routeData)
				setRoutes([...routes, data])
			} catch (error) {
				console.error('Error al agregar ruta:', error)
			}
		} else if (contentModal.title === 'Editar Ruta') {
			try {
				const data = await updateRoute(routeData)
				setRoutes(
					routes.map(route => (route.id_ruta === data.id_ruta ? data : route)),
				)
			} catch (error) {
				console.error('Error al actualizar ruta:', error)
			}
		} else if (contentModal.title === 'Eliminar Ruta') {
			try {
				await deleteRoute(routeData.id_ruta)
				setRoutes(routes.filter(route => route.id_ruta !== routeData.id_ruta))
			} catch (error) {
				console.error('Error al eliminar ruta:', error)
			}
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
				columnsDisplay={columnsDisplay}
				data={routes}
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
		</>
	)
}

export default RoutesAdmin
