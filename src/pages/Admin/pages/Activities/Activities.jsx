import PageSchema from '../PageSchema/PageSchema'
import { ModalAdmin } from '../../components'
import Error from '../../../../components/Error/Error'
import { useActivities } from '../../../../context/AdminProviders'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Activities() {
	const {
		activities,
		handleSetActivities,
		handleUpdateActivity,
		handleDeleteActivity,
		errorModal,
		handleClearError,
	} = useActivities()
	const title = 'Gestión de Actividades'
	const columns = [
		{
			column: 'id_actividad',
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
			header: 'Capacidad (personas)',
		},
		{
			column: 'descripcion',
			header: 'Descripcion',
		},
	]
	const actions = [
		{
			label: 'Nuevo',
			icon: 'pi pi-fw pi-calendar-plus',
		},
		{
			label: 'Editar',
			icon: 'pi pi-fw pi-calendar-clock',
		},
		{
			label: 'Eliminar',
			icon: 'pi pi-fw pi-calendar-minus',
		},
	]
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const activitySelectedState = {
		id_actividad: '',
		nombre: '',
		duracion: '',
		precio: '',
		capacidad: '',
		descripcion: '',
	}

	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [activitySelected, setActivitySelected] = useState(
		activitySelectedState,
	)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
				setModal(!modal)
				setActivitySelected(activitySelectedState)
				setContentModal({
					title: 'Agregar Actividad',
					button: 'Agregar',
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
							type: 'number',
							name: 'capacidad',
							placeholder: 'Capacidad',
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
					title: 'Editar Actividad',
					button: 'Editar',
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
							type: 'number',
							name: 'capacidad',
							placeholder: 'Capacidad',
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
				handleDeleteActivity(activitySelected.id_actividad)
				toast.error('La actividad se ha eliminado')
				break
			default:
				break
		}
	}

	const handleActivities = async activityData => {
		if (contentModal.title === 'Agregar Actividad') {
			handleSetActivities(activityData)
			toast.success('La actividad se ha creado correctamente')
		} else if (contentModal.title === 'Editar Actividad') {
			handleUpdateActivity(activityData)
			toast.info('La actividad se ha actualizado correctamente')
		}
	}

	const handleRowClick = row => {
		setActivitySelected({
			nombre: row.nombre || '',
			duracion: row.duracion || '',
			precio: row.precio || '',
			id_actividad: row.id_actividad || '',
			capacidad: row.capacidad || '',
			descripcion: row.descripcion || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				data={Array.isArray(activities) ? activities : []}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={activitySelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleActivities}
				rowSelected={activitySelected}
			/>
			<Error error={errorModal} clearErrors={handleClearError} />
		</>
	)
}
