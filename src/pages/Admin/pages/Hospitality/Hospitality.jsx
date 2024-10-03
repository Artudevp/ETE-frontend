import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getHospitality,
	addHospitality,
	updateHospitality,
	deleteHospitality,
} from '../../../../services/Hospedajes'
import { useState, useEffect } from 'react'

function Hospitality() {
	const title = 'Gestión de Hospedaje'
	const columnsDisplay = ['ID', 'Tipo', 'Capacidad', 'Disponibilidad', 'Precio']
	const columns = [
		'id_hospedaje',
		'tipo_hab',
		'capacidad',
		'disponibilidad',
		'precio_hab',
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const hospedajeSelectedState = {
		id_hospedaje: '',
		tipo_hab: '',
		capacidad: '',
		disponibilidad: '',
		precio_hab: '',
	}

	const [hospedaje, setHospedaje] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [hospedajeSelected, setHospedajeSelected] = useState(
		hospedajeSelectedState,
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getHospitality()
				setHospedaje(data)
				console.log(data)
			} catch (error) {
				console.error('Error al obtener hospedaje:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
			setModal(!modal)
			setHospedajeSelected(hospedajeSelectedState)
			setContentModal({
				title: 'Agregar Hospedaje',
				button: 'Agregar',
				inputs: [
					{
						type: 'text',
						name: 'tipo_hab',
						placeholder: 'Tipo',
					},
					{
						type: 'text',
						name: 'capacidad',
						placeholder: 'Capacidad',
					},
					{
						type: 'text',
						name: 'disponibilidad',
						placeholder: 'Disponibilidad',
					},
					{
						type: 'number',
						name: 'precio_hab',
						placeholder: 'Precio',
					},
				],
			})
		} else if (action === 'Editar') {
			setModal(!modal)
			setContentModal({
				title: 'Editar Hospedaje',
				button: 'Editar',
				inputs: [
					{
						type: 'text',
						name: 'tipo_hab',
						placeholder: 'Tipo',
					},
					{
						type: 'text',
						name: 'capacidad',
						placeholder: 'Capacidad',
					},
					{
						type: 'text',
						name: 'disponibilidad',
						placeholder: 'Disponibilidad',
					},
					{
						type: 'number',
						name: 'precio_hab',
						placeholder: 'Precio',
					},
				],
			})
		} else if (action === 'Eliminar') {
			setModal(!modal)
			setContentModal({
				title: 'Eliminar Hospedaje',
				button: 'Eliminar',
				inputs: [
					{
						type: 'text',
						name: 'id_hospedaje',
						placeholder: 'ID',
					},
				],
			})
		}
	}

	const handleHospedaje = async hospedajeData => {
		if (contentModal.title === 'Agregar Hospedaje') {
			try {
				const data = await addHospitality(hospedajeData)
				setHospedaje([...hospedaje, data])
			} catch (error) {
				console.error('Error al agregar hospedaje:', error)
			}
		} else if (contentModal.title === 'Editar Hospedaje') {
			try {
				const data = await updateHospitality(hospedajeData)
				setHospedaje(
					hospedaje.map(hospedaje =>
						hospedaje.id_hospedaje === data.id_hospedaje ? data : hospedaje,
					),
				)
			} catch (error) {
				console.error('Error al actualizar hospedaje:', error)
			}
		} else if (contentModal.title === 'Eliminar Hospedaje') {
			try {
				await deleteHospitality(hospedajeData.id_hospedaje)
				setHospedaje(
					hospedaje.filter(
						hospedaje => hospedaje.id_hospedaje !== hospedajeData.id_hospedaje,
					),
				)
			} catch (error) {
				console.error('Error al eliminar hospedaje:', error)
			}
		}
	}

	const handleRowClick = row => {
		setHospedajeSelected({
			id_hospedaje: row.id_hospedaje || '',
			tipo_hab: row.tipo_hab || '',
			capacidad: row.capacidad || '',
			disponibilidad: row.disponibilidad || '',
			precio_hab: row.precio_hab || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				columnsDisplay={columnsDisplay}
				data={hospedaje}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={hospedajeSelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleHospedaje}
				rowSelected={hospedajeSelected}
			/>
		</>
	)
}

export default Hospitality
