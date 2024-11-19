import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useRoutes } from '../../../../context/AdminProviders'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
			column: 'nombre',
			header: 'Nombre',
		},
		{
			column: 'duracion',
			header: 'Duración',
		},
		{
			column: 'precio',
			header: 'Precio',
		},
		{
			column: 'capacidad',
			header: 'Capacidad'
		},
		{
			column: 'descripcion',
			header: 'Descripcion'
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
		nombre: '',
		duracion: '',
		precio: '',
		capacidad: '',
		descripcion: '',
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
							name: 'nombre',
							placeholder: 'Nombre',
						},
						{
							type: 'number',
							name: 'duracion',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: "number",
							name: 'capacidad',
							placeholder: "Capacidad"
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'Descripción'
						}
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
							name: 'nombre',
							placeholder: 'Nombre',
						},
						{
							type: 'number',
							name: 'duracion',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: "number",
							name: 'capacidad',
							placeholder: "Capacidad"
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'Descripción'
						}
					],
				})
				break
			case 'Eliminar':
				handleDeleteRoute(routeSelected.id_ruta)
				toast.error("El producto se ha eliminado")
				break
			default:
				break
		}
	}

	const handleRoutes = async routeData => {
		if (contentModal.title === 'Nuevo Ruta') {
			handleSetRoutes(routeData)
			toast.success("El producto se ha agregado satisfactoriamente")
		} else if (contentModal.title === 'Editar Ruta') {
			handleUpdateRoute(routeData)
			toast.info("El producto se ha editado correctamente")
		}
	}

	const handleRowClick = row => {
		setRouteSelected({
			id_ruta: row.id_ruta || '',
			nombre: row.nombre || '',
			duracion: row.duracion || '',
			precio: row.precio || '',
			capacidad: row.capacidad || '',
			descripcion: row.descripcion || '',
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
