import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getClients,
	addClient,
	updateClient,
	deleteClient,
} from '../../../../services/Clientes'
import { useState, useEffect } from 'react'

function Clients() {
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

	const [clients, setClients] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [clientSelected, setClientSelected] = useState(clientSelectedState)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getClients()
				setClients(data)
			} catch (error) {
				console.log('Error al obtener clientes:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
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
		} else if (action === 'Editar') {
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
		} else if (action === 'Eliminar') {
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
		}
	}

	const handleClients = async clientData => {
		if (contentModal.title === 'Agregar Cliente') {
			try {
				const data = await addClient(clientData)
				setClients([...clients, data])
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Editar Cliente') {
			try {
				const data = await updateClient(clientData)
				setClients(
					clients.map(client =>
						client.id_cliente === data.id_cliente ? data : client,
					),
				)
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Eliminar Cliente') {
			try {
				await deleteClient(clientData.id_cliente)
				setClients(
					clients.filter(client => client.id_cliente !== clientData.id_cliente),
				)
			} catch (error) {
				console.error(error)
			}
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
				data={clients}
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
