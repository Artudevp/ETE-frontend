import PageSchema from '../PageSchema/PageSchema'
import ModalAdmin from '../../components/ModalAdmin/ModalAdmin'
import Error from '../../../../components/Error/Error'
import { useUsers } from '../../../../context/AdminProviders'
import { useState } from 'react'

function Users() {
	const {
		users,
		handleSetUsers,
		handleUpdateUser,
		handleDeleteUser,
		errorModal,
	} = useUsers()

	const title = 'Gestión de Usuarios'
	const columns = [
		{
			column: 'id',
			header: 'ID',
		},
		{
			column: 'nombre',
			header: 'Nombre',
		},
		{
			column: 'correo',
			header: 'Correo',
		},
		{
			column: 'contraseña',
			header: 'Contraseña',
		},
	]
	const actions = [
		{
			label: 'Nuevo',
			icon: 'pi pi-fw pi-user-plus',
		},
		{
			label: 'Ver o editar',
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
			case 'Ver o editar':
				setModal(!modal)
				setContentModal({
					title: 'Ver Usuario',
					button: 'Editar',
					inputs: [
						{
							type: 'text',
							name: 'id',
							placeholder: 'Id',
							disabled: true,
						},
						{
							type: 'text',
							name: 'nombre',
							placeholder: 'Nombre',
						},
						{
							type: 'text',
							name: 'apellido',
							placeholder: 'Apellido',
						},
						{
							type: 'text',
							name: 'username',
							placeholder: 'Nombre de usuario',
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
						{
							type: 'text',
							name: 'rol',
							placeholder: 'Rol de usuario',
							disabled: true,
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
							name: 'id',
							placeholder: 'ID',
						},
					],
				})
		}
	}

	const handleUsers = async userData => {
		if (contentModal.title === 'Agregar Usuario') {
			handleSetUsers(userData)
		} else if (contentModal.title === 'Ver Usuario') {
			handleUpdateUser(userData)
		} else if (contentModal.title === 'Eliminar Usuario') {
			handleDeleteUser(userData.id)
		}
	}

	const handleRowClick = row => {
		console.log(row)
		setUserSelected({
			nombre: row.nombre || '',
			apellido: row.apellido || '',
			username: row.username || '',
			correo: row.correo || '',
			contraseña: row.contraseña || '',
			rol: row.rol || '',
			id: row.id || '',
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
			<Error error={errorModal} />
		</>
	)
}

export default Users
