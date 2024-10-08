import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useClients } from '../../../../context/ClientsContext'
import { useState } from 'react'
function Clients() {
	const {
		clients,
		handleSetClients,
		handleUpdateClient,
		handleDeleteClient,
		errorModal,
	} = useClients()
	const title = 'Gestión de Clientes'
	const columns = [
		{
			column: 'id_cliente',
			header: 'ID',
		},
		{
			column: 'nombre_cli',
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
		nombre_cli: '',
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
							name: 'nombre_cli',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'cedula',
							placeholder: 'Cédula',
						},
						{
							type: 'text',
							name: 'genero',
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
							name: 'nombre_cli',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'cedula',
							placeholder: 'Cédula',
						},
						{
							type: 'text',
							name: 'genero',
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
			case 'Eliminar':
				setModal(!modal)
				setContentModal({
					title: 'Eliminar Cliente',
					button: 'Eliminar',
					inputs: [
						{
							name: 'id_cliente',
							placeholder: 'ID Cliente',
							type: 'number',
						},
					],
				})
				break
			default:
				break
		}
	}

	const handleClients = async clientData => {
		if (contentModal.title === 'Agregar Cliente') {
			handleSetClients(clientData)
		} else if (contentModal.title === 'Editar Cliente') {
			handleUpdateClient(clientData)
		} else if (contentModal.title === 'Eliminar Cliente') {
			handleDeleteClient(clientData.id_cliente)
		}
	}

	const handleRowClick = row => {
		setClientSelected({
			nombre_cli: row.nombre_cli || '',
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
			<Error error={errorModal} />
		</>
	)
}

export default Clients
