import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import { useUsers } from '../../../../context/UsersContext'
import { useState } from 'react'

function Users() {
	const { users, handleSetUsers, handleUpdateUser, handleDeleteUser } =
		useUsers()
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
	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [userSelected, setUserSelected] = useState(userSelectedState)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
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
				break
			case 'Editar':
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
				break
			case 'Eliminar':
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
			handleSetUsers(userData)
		} else if (contentModal.title === 'Editar Usuario') {
			handleUpdateUser(userData)
		} else if (contentModal.title === 'Eliminar Usuario') {
			handleDeleteUser(userData.id_usuario)
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
				data={Array.isArray(users) ? users : []}
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
