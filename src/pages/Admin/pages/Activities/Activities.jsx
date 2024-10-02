import PageSchema from '../PageSchema/PageSchema'

function Activities() {
	const title = 'Gestión de Actividades'
	const columns = ['ID', 'Nombre', 'Duración', 'Precio']
	const data = [
		{
			id: 1,
			nombre: 'Actividad 1',
			duración: '2 horas',
			precio: 100,
		},
		{
			id: 2,
			nombre: 'Actividad 2',
			duración: '3 horas',
			precio: 200,
		},
		{
			id: 3,
			nombre: 'Actividad 3',
			duración: '4 horas',
			precio: 300,
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default Activities
