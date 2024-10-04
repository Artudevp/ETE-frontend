import { createContext, useContext, useState, useEffect } from 'react'
import { getUsers, addUser, updateUser, deleteUser } from '../services/Usuarios'

export const UsersContext = createContext()

export const useUsers = () => {
	return useContext(UsersContext)
}

export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		try {
			const data = await getUsers()
			setUsers(data)
		} catch (error) {
			console.error('Error al obtener usuarios:', error)
		}
	}

	const handleSetUsers = async userData => {
		try {
			const data = await addUser(userData)
			setUsers([...users, data])
		} catch (error) {
			console.error('Error al agregar usuario:', error)
		}
	}

	const handleUpdateUser = async userData => {
		try {
			const data = await updateUser(userData)
			setUsers(
				users.map(user =>
					user.id_usuario === userData.id_usuario ? data : user,
				),
			)
		} catch (error) {
			console.error('Error al actualizar usuario:', error)
		}
	}

	const handleDeleteUser = async id => {
		try {
			await deleteUser(id)
			setUsers(users.filter(user => user.id_usuario !== id))
		} catch (error) {
			console.error('Error al eliminar usuario:', error)
		}
	}

	useEffect(() => {
		fetchUsers()
	}, [])

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
