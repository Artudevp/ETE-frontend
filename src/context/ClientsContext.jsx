import { createContext, useContext, useState, useEffect } from 'react'
import useEntityManagement from '../hooks/useEntityManagement'
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
	const {
		entities: clients,
		handleSetEntity: handleSetClients,
		handleUpdateEntity: handleUpdateClient,
		handleDeleteEntity: handleDeleteClient,
	} = useEntityManagement(
		getClients,
		addClient,
		updateClient,
		deleteClient,
		'cliente',
	)

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
