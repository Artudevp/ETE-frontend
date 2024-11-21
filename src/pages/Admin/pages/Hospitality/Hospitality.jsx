import PageSchema from '../PageSchema/PageSchema'
import { ModalAdmin } from '../../components'
import Error from '../../../../components/Error/Error'
import { useHospitality } from '../../../../context/AdminProviders'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Hospitality() {
	const {
		hospitality,
		handleSetHospitality,
		handleUpdateHospitality,
		handleDeleteHospitality,
		errorModal,
		handleClearError,
	} = useHospitality()
	const title = 'Gestión de Hospedaje'
	const columns = [
		{
			column: 'id',
			header: 'ID',
		},
		{
			column: 'tipo',
			header: 'Tipo',
		},
		{
			column: 'capacidad',
			header: 'Capacidad',
		},
		{
			column: 'cantidad',
			header: 'Disponibilidad',
		},
		{
			column: 'precio',
			header: 'Precio',
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
	const hospitalitySelectedState = {
		id: '',
		tipo: '',
		capacidad: '',
		cantidad: '',
		precio: '',
		descripcion: '',
	}
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [hospitalitySelected, setHospitalitySelect] = useState(
		hospitalitySelectedState,
	)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
				setModal(!modal)
				setHospitalitySelect(hospitalitySelectedState)
				setContentModal({
					title: 'Agregar Hospedaje',
					button: 'Agregar',
					inputs: [
						{
							type: 'text',
							name: 'tipo',
							placeholder: 'Tipo',
						},
						{
							type: 'text',
							name: 'capacidad',
							placeholder: 'Capacidad',
						},
						{
							type: 'text',
							name: 'cantidad',
							placeholder: 'Cantidad',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'descripción',
						},
					],
				})
				break
			case 'Editar':
				setModal(!modal)
				setContentModal({
					title: 'Editar Hospedaje',
					button: 'Editar',
					inputs: [
						{
							type: 'text',
							name: 'tipo',
							placeholder: 'Tipo',
						},
						{
							type: 'text',
							name: 'capacidad',
							placeholder: 'Capacidad',
						},
						{
							type: 'text',
							name: 'cantidad',
							placeholder: 'Disponibilidad',
						},
						{
							type: 'number',
							name: 'precio',
							placeholder: 'Precio',
						},
						{
							type: 'text',
							name: 'descripcion',
							placeholder: 'descripción',
						},
					],
				})
				break
			case 'Eliminar':
				if (hospitalitySelected.id) {
					handleDeleteHospitality(hospitalitySelected.id)
					toast.error('El hospedaje se ha eliminado')
				} else {
					toast.error('No se seleccionó un hospedaje para eliminar')
				}
				break
			default:
				break
		}
	}

	const handleHospitality = async hospedajeData => {
		if (contentModal.title === 'Agregar Hospedaje') {
			handleSetHospitality(hospedajeData)
			toast.success('El hospedaje se ha creado correctamente')
		} else if (contentModal.title === 'Editar Hospedaje') {
			handleUpdateHospitality(hospedajeData)
			toast.info('El hospedaje se ha actualizado correctamente')
		}
	}

	const handleRowClick = row => {
		setHospitalitySelect({
			id: row.id || '',
			tipo: row.tipo || '',
			capacidad: row.capacidad || '',
			cantidad: row.cantidad || '',
			precio: row.precio || '',
			descripcion: row.descripcion || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				data={Array.isArray(hospitality) ? hospitality : []}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={hospitalitySelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleHospitality}
				rowSelected={hospitalitySelected}
			/>
			<Error error={errorModal} clearErrors={handleClearError} />
		</>
	)
}
