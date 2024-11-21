import PageSchema from '../PageSchema/PageSchema'
import { ModalAdmin } from '../../components'
import Error from '../../../../components/Error/Error'
import { useClients } from '../../../../context/AdminProviders'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Clients() {
	const {
		clients,
		handleSetClients,
		handleUpdateClient,
		handleDeleteClient,
		errorModal,
		handleClearError,
	} = useClients()
	const title = 'Gestión de Clientes'
	const columns = [
		{
			column: 'id_cliente',
			header: 'ID',
		},
		{
			column: 'nombre',
			header: 'Nombre',
		},
		{
			column: 'cedula',
			header: 'Cedula',
		},
		{
			column: 'genero',
			header: 'Género',
		},
		{
			column: 'edad',
			header: 'Edad',
		},
	]
	const actions = [
		{
			label: 'Nuevo',
			icon: 'pi pi-fw pi-user-plus',
		},
		{
			label: 'Editar',
			icon: 'pi pi-fw pi-user-edit',
		},
		{
			label: 'Eliminar',
			icon: 'pi pi-fw pi-user-minus',
		},
	]
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const clientSelectedState = {
		nombre: '',
		cedula: '',
		genero: '',
		edad: '',
		id_cliente: '',
	}

	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [clientSelected, setClientSelected] = useState(clientSelectedState)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
				setModal(!modal)
				setClientSelected(clientSelectedState)
				setContentModal({
					title: 'Agregar Cliente',
					button: 'Agregar',
					inputs: [
						{
							type: 'text',
							name: 'nombre',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'cedula',
							placeholder: 'Cédula',
						},
						{
							type: 'select',
							name: 'genero',
							options: ['MASCULINO', 'FEMENINO', 'OTRO'],
							placeholder: 'Género',
						},
						{
							type: 'number',
							name: 'edad',
							placeholder: 'Edad',
						},
					],
				})
				break
			case 'Editar':
				setModal(!modal)
				setContentModal({
					title: 'Editar Cliente',
					button: 'Editar',
					inputs: [
						{
							type: 'text',
							name: 'nombre',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'cedula',
							placeholder: 'Cédula',
						},
						{
							type: 'select',
							name: 'genero',
							placeholder: 'Género',
							options: ['MASCULINO', 'FEMENINO', 'OTRO'],
						},
						{
							type: 'number',
							name: 'edad',
							placeholder: 'Edad',
						},
					],
				})
				break
			case 'Eliminar':
				if (clientSelected.id_cliente) {
					handleDeleteClient(clientSelected.id_cliente)
					toast.success('Cliente eliminado con éxito')
				} else {
					toast.error('No se seleccionó un cliente para eliminar')
				}
				break
			default:
				break
		}
	}

	const handleClients = async clientData => {
		if (contentModal.title === 'Agregar Cliente') {
			handleSetClients(clientData)
			toast.success('Cliente agregado con éxito')
		} else if (contentModal.title === 'Editar Cliente') {
			handleUpdateClient(clientData)
			toast.success('Cliente editado con éxito')
		}
	}

	const handleRowClick = row => {
		setClientSelected({
			nombre: row.nombre || '',
			cedula: row.cedula || '',
			genero: row.genero || '',
			edad: row.edad || '',
			id_cliente: row.id_cliente || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				data={Array.isArray(clients) ? clients : []}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={clientSelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleClients}
				rowSelected={clientSelected}
			/>
			<Error error={errorModal} clearErrors={handleClearError} />
		</>
	)
}
