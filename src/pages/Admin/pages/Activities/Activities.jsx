import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useActivities } from '../../../../context/ActivitiesContext'
import { useState } from 'react'

function Activities() {
	const {
		activities,
		handleSetActivities,
		handleUpdateActivity,
		handleDeleteActivity,
		errorModal,
	} = useActivities()
	const title = 'Gestión de Actividades'
	const columns = [
		{
			column: 'id_actividad',
			header: 'ID',
		},
		{
			column: 'nombre_act',
			header: 'Nombre',
		},
		{
			column: 'duración_act',
			header: 'Duración',
		},
		{
			column: 'precio_act',
			header: 'Precio',
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
		nombre_act: '',
		duración_act: '',
		precio_act: '',
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
							name: 'nombre_act',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'duración_act',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio_act',
							placeholder: 'Precio',
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
							name: 'nombre_act',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'duración_act',
							placeholder: 'Duración (Horas)',
						},
						{
							type: 'number',
							name: 'precio_act',
							placeholder: 'Precio',
						},
					],
				})
				break
			case 'Eliminar':
				setModal(!modal)
				setContentModal({
					title: 'Eliminar Actividad',
					button: 'Eliminar',
					inputs: [
						{
							type: 'text',
							name: 'id_actividad',
							placeholder: 'ID',
						},
					],
				})
				break
			default:
				break
		}
	}

	const handleActivities = async activityData => {
		if (contentModal.title === 'Agregar Actividad') {
			handleSetActivities(activityData)
		} else if (contentModal.title === 'Editar Actividad') {
			handleUpdateActivity(activityData)
		} else if (contentModal.title === 'Eliminar Actividad') {
			handleDeleteActivity(activityData.id_actividad)
		}
	}

	const handleRowClick = row => {
		setActivitySelected({
			nombre_act: row.nombre_act || '',
			duración_act: row.duración_act || '',
			precio_act: row.precio_act || '',
			id_actividad: row.id_actividad || '',
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
			<Error error={errorModal} />
		</>
	)
}

export default Activities
