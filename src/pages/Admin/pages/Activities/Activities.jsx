import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getActivities,
	addActivity,
	updateActivity,
	deleteActivity,
} from '../../../../services/Actividades'
import { useState, useEffect } from 'react'

function Activities() {
	const title = 'Gestión de Actividades'
	const columnsDisplay = ['ID', 'Nombre', 'Duración', 'Precio']
	const columns = ['id_actividad', 'nombre_act', 'duración_act', 'precio_act']
	const actions = ['Nuevo', 'Editar', 'Eliminar']
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

	const [activities, setActivities] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [activitySelected, setActivitySelected] = useState(
		activitySelectedState,
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getActivities()
				setActivities(data)
			} catch (error) {
				console.log('Error al obtener actividades:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
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
		} else if (action === 'Editar') {
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
		} else if (action === 'Eliminar') {
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
		}
	}

	const handleActivities = async activityData => {
		if (contentModal.title === 'Agregar Actividad') {
			try {
				const data = await addActivity(activityData)
				setActivities([...activities, data])
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Editar Actividad') {
			try {
				const data = await updateActivity(activityData)
				setActivities(
					activities.map(activity =>
						activity.id_actividad === data.id_actividad ? data : activity,
					),
				)
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Eliminar Actividad') {
			try {
				await deleteActivity(activityData.id_actividad)
				setActivities(
					activities.filter(
						activity => activity.id_actividad !== activityData.id_actividad,
					),
				)
			} catch (error) {
				console.error(error)
			}
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
				columnsDisplay={columnsDisplay}
				data={activities}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleActivities}
				rowSelected={activitySelected}
			/>
		</>
	)
}

export default Activities
