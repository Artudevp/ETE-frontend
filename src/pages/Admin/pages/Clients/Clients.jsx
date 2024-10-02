import PageSchema from '../PageSchema/PageSchema'

function Clients() {
	const title = 'Gestión de Clientes'
	const columns = ['ID', 'Nombre', 'Cedula', 'Género', 'Edad']
	const data = [
		{
			id: 1,
			nombre: 'Juan Perez',
			cedula: '1234567890',
			género: 'Masculino',
			edad: 25,
		},
		{
			id: 2,
			nombre: 'María López',
			cedula: '1234567890',
			género: 'Femenino',
			edad: 30,
		},
		{
			id: 3,
			nombre: 'Carlos García',
			cedula: '1234567890',
			género: 'Masculino',
			edad: 35,
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default Clients
