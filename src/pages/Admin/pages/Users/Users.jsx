import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useUsers } from '../../../../context/AdminProviders'
import { useState } from 'react'
import { toast } from 'react-toastify'

function Users() {
	const {
		users,
		handleSetUsers,
		handleUpdateUser,
		handleDeleteUser,
		errorModal,
		handleClearError,
	} = useUsers()

	const title = 'Gestión de Usuarios'
	const columns = [
		{ column: 'id', header: 'Numero' },
		{ column: 'nombre', header: 'Nombre' },
		{ column: 'apellido', header: 'Apellido' },
		{ column: 'correo', header: 'Correo' },
		{ column: 'username', header: 'Nombre de usuario' },
	]
	const actions = [
		{ label: 'Nuevo', icon: 'pi pi-fw pi-user-plus' },
		{ label: 'Ver o editar', icon: 'pi pi-fw pi-user-edit' },
		{ label: 'Eliminar', icon: 'pi pi-fw pi-user-minus' },
	]

	const contentModalState = {
		title: '',
		button: '',
		inputs: [],
	}
	const userSelectedState = {
		nombre: '',
		apellido: '',
		username: '',
		correo: '',
		contraseña: '',
		rol: '',
		id: '',
	}

	const [modal, setModal] = useState(false)
	const [contentModal, setContentModal] = useState(contentModalState)
	const [userSelected, setUserSelected] = useState(userSelectedState)

	const handleModal = action => {
		switch (action) {
			case 'Nuevo':
				setModal(true)
				setUserSelected(userSelectedState)
				setContentModal({
					title: 'Agregar Usuario',
					button: 'Agregar',
					inputs: [
						{ type: 'text', name: 'nombre', placeholder: 'Nombre', value: '' },
						{
							type: 'text',
							name: 'apellido',
							placeholder: 'Apellido',
							value: '',
						},
						{ type: 'email', name: 'correo', placeholder: 'Correo', value: '' },
						{
							type: 'text',
							name: 'username',
							placeholder: 'Nombre de usuario',
							value: '',
						},
						{
							type: 'password',
							name: 'contraseña',
							placeholder: 'Contraseña',
							value: '',
						},
						{
							type: 'select',
							name: 'rol',
							placeholder: 'Rol de usuario',
							options: ['ROLE_USER', 'ROLE_ADMIN'],
							value: '',
						},
					],
				})
				break
			case 'Ver o editar':
				setModal(true)
				setContentModal({
					title: 'Ver Usuario',
					button: 'Editar',
					inputs: [
						{
							type: 'text',
							name: 'id',
							placeholder: 'Numero',
							value: userSelected.id || '',
							disabled: true,
						},
						{
							type: 'text',
							name: 'nombre',
							placeholder: 'Nombre',
							value: userSelected.nombre || '',
						},
						{
							type: 'text',
							name: 'apellido',
							placeholder: 'Apellido',
							value: userSelected.apellido || '',
						},
						{
							type: 'text',
							name: 'username',
							placeholder: 'Nombre de usuario',
							value: userSelected.username || '',
						},
						{
							type: 'email',
							name: 'correo',
							placeholder: 'Correo',
							value: userSelected.correo || '',
						},
						{
							type: 'password',
							name: 'contraseña',
							placeholder: 'Contraseña (Dejar en blanco para no cambiarla)',
							value: userSelected.contraseña || '',
							required: false,
						},
						{
							type: 'text',
							name: 'rol',
							placeholder: 'Rol de usuario',
							value: userSelected.rol || '',
							disabled: true,
						},
					],
				})
				break
			case 'Eliminar':
				if (userSelected.id) {
					handleDeleteUser(userSelected.id)
					toast.success('Usuario eliminado con éxito')
				} else {
					toast.error('No se seleccionó un usuario para eliminar')
				}
				break
			default:
				setModal(false)
		}
	}

	const handleUsers = async userData => {
		console.log(userData)
		if (contentModal.title === 'Agregar Usuario') {
			handleSetUsers(userData)
			toast.success('Usuario agregado con éxito')
		} else if (contentModal.title === 'Ver Usuario') {
			if (!userData.id || isNaN(userData.id)) {
				toast.error('ID del usuario es inválido')
				return
			}

			if (userData.contraseña && userData.contraseña !== '') {
				handleUpdateUser(userData)
				toast.success('Usuario editado con contraseña actualizada')
			} else {
				handleUpdateUser({ ...userData, contraseña: userSelected.contraseña })
				toast.success('Usuario editado sin cambios en la contraseña')
			}
		}
	}

	const handleRowClick = row => {
		setUserSelected({
			id: row.id || '',
			nombre: row.nombre || '',
			apellido: row.apellido || '',
			username: row.username || '',
			correo: row.correo || '',
			rol: row.rol || '',
		})
	}

	return (
		<>
			<PageSchema
				title={title}
				columns={columns}
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
			<Error error={errorModal} clearErrors={handleClearError} />
		</>
	)
}

export default Users
