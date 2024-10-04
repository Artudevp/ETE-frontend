import { createContext, useContext, useState, useEffect } from 'react'
import {
	getClients,
	addClient,
	updateClient,
	deleteClient,
} from '../services/Clientes'

export const ClientsContext = createContext()

export const useClients = () => {
	return useContext(ClientsContext)
}

export const ClientsProvider = ({ children }) => {
	const [clients, setClients] = useState([])

	const fetchClients = async () => {
		try {
			const data = await getClients()
			setClients(data)
		} catch (error) {
			console.error('Error al obtener clientes:', error)
		}
	}

	const handleSetClients = async clientData => {
		try {
			const data = await addClient(clientData)
			setClients([...clients, data])
		} catch (error) {
			console.error('Error al agregar cliente:', error)
		}
	}

	const handleUpdateClient = async clientData => {
		try {
			const data = await updateClient(clientData)
			setClients(
				clients.map(client =>
					client.id_cliente === clientData.id_cliente ? data : client,
				),
			)
		} catch (error) {
			console.error('Error al actualizar cliente:', error)
		}
	}

	const handleDeleteClient = async id => {
		try {
			await deleteClient(id)
			setClients(clients.filter(client => client.id_cliente !== id))
		} catch (error) {
			console.error('Error al eliminar cliente:', error)
		}
	}

	useEffect(() => {
		fetchClients()
	}, [])

	return (
		<ClientsContext.Provider
			value={{
				clients,
				handleSetClients,
				handleUpdateClient,
				handleDeleteClient,
			}}
		>
			{children}
		</ClientsContext.Provider>
	)
}
