import { createContext, useContext } from 'react'
import useEntityManagement from '../hooks/useEntityManagement'
import { getUsers, addUser, updateUser, deleteUser } from '../services/Usuarios'

export const UsersContext = createContext()

export const useUsers = () => {
	return useContext(UsersContext)
}

export const UsersProvider = ({ children }) => {
	const {
		entities: users,
		handleSetEntity: handleSetUsers,
		handleUpdateEntity: handleUpdateUser,
		handleDeleteEntity: handleDeleteUser,
	} = useEntityManagement(getUsers, addUser, updateUser, deleteUser, 'usuario')

	return (
		<UsersContext.Provider
			value={{
				users,
				handleSetUsers,
				handleUpdateUser,
				handleDeleteUser,
			}}
		>
			{children}
		</UsersContext.Provider>
	)
}
