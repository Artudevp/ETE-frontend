import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import { useClients } from '../../../../context/ClientsContext'
import { useState } from 'react'

function Clients() {
	const { clients, handleSetClients, handleUpdateClient, handleDeleteClient } =
		useClients()
	const title = 'Gestión de Clientes'
	const columnsDisplay = ['ID', 'Nombre', 'Cedula', 'Género', 'Edad']
	const columns = ['id_cliente', 'nombre_cli', 'cedula', 'genero', 'edad']
	const actions = ['Nuevo', 'Editar', 'Eliminar']
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
				columnsDisplay={columnsDisplay}
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
		</>
	)
}

export default Clients
