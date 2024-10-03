import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import {
	getUsers,
	addUser,
	updateUser,
	deleteUser,
} from '../../../../services/Usuarios'
import { useEffect, useState } from 'react'

function Users() {
	const title = 'Gestión de Usuarios'
	const columnsDisplay = ['ID', 'Nombre', 'Correo', 'Contraseña']
	const columns = ['id_usuario', 'nombre', 'correo', 'contraseña']
	const actions = ['Nuevo', 'Editar', 'Eliminar']
	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const userSelectedState = {
		nombre: '',
		correo: '',
		contraseña: '',
		id_usuario: '',
	}

	const [users, setUsers] = useState([])
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [userSelected, setUserSelected] = useState(userSelectedState)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUsers()
				setUsers(data)
			} catch (error) {
				console.error('Error al obtener usuarios:', error)
			}
		}
		fetchData()
	}, [])

	const handleModal = action => {
		if (action === 'Nuevo') {
			setModal(!modal)
			setUserSelected(userSelectedState)
			setContentModal({
				title: 'Agregar Usuario',
				button: 'Agregar',
				inputs: [
					{
						type: 'text',
						name: 'nombre',
						placeholder: 'Nombre',
					},
					{
						type: 'email',
						name: 'correo',
						placeholder: 'Correo',
					},
					{
						type: 'password',
						name: 'contraseña',
						placeholder: 'Contraseña',
					},
				],
			})
		} else if (action === 'Editar') {
			setModal(!modal)
			setContentModal({
				title: 'Editar Usuario',
				button: 'Editar',
				inputs: [
					{
						type: 'text',
						name: 'nombre',
						placeholder: 'Nombre',
					},
					{
						type: 'email',
						name: 'correo',
						placeholder: 'Correo',
					},
					{
						type: 'password',
						name: 'contraseña',
						placeholder: 'Contraseña',
					},
				],
			})
		} else if (action === 'Eliminar') {
			setModal(!modal)
			setContentModal({
				title: 'Eliminar Usuario',
				button: 'Eliminar',
				inputs: [
					{
						type: 'text',
						name: 'id_usuario',
						placeholder: 'ID',
					},
				],
			})
		}
	}

	const handleUsers = async userData => {
		if (contentModal.title === 'Agregar Usuario') {
			try {
				const data = await addUser(userData)
				setUsers([...users, data])
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Editar Usuario') {
			try {
				const data = await updateUser(userData)
				setUsers(
					users.map(user =>
						user.id_usuario === data.id_usuario ? data : user,
					),
				)
			} catch (error) {
				console.error(error)
			}
		} else if (contentModal.title === 'Eliminar Usuario') {
			try {
				await deleteUser(userData.id_usuario)
				setUsers(users.filter(user => user.id_usuario !== userData.id_usuario))
			} catch (error) {
				console.error(error)
			}
		}
	}

	const handleRowClick = row => {
		setUserSelected({
			nombre: row.nombre || '',
			correo: row.correo || '',
			contraseña: row.contraseña || '',
			id_usuario: row.id_usuario || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
				columnsDisplay={columnsDisplay}
				data={users}
				actions={actions}
				activeModal={handleModal}
				handleRowClick={handleRowClick}
				dataInitialState={userSelectedState}
			/>
			<ModalAdmin
				active={modal}
				setActive={setModal}
				content={contentModal}
				setData={handleUsers}
				rowSelected={userSelected}
			/>
		</>
	)
}

export default Users
