import PageSchema from '../PageSchema/PageSchema'

function Users() {
	const title = 'Gestión de Usuarios'
	const columns = ['ID', 'Nombre', 'Correo', 'Contraseña']
	const data = [
		{
			id: 1,
			nombre: 'Juan Perez',
			correo: 'juanperez@gmail.com',
			contraseña: '123456',
		},
		{
			id: 2,
			nombre: 'María López',
			correo: 'marialopez@gmail.com',
			contraseña: '654321',
		},
		{
			id: 3,
			nombre: 'Carlos García',
			correo: 'carlosgarcia@gmail.com',
			contraseña: '123456',
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default Users
