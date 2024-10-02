import PageSchema from '../PageSchema/PageSchema'

function RoutesAdmin() {
	const title = 'Gestión de Rutas'
	const columns = ['ID', 'Nombre', 'Duración', 'Precio']
	const data = [
		{
			id: 1,
			nombre: 'Ruta 1',
			duración: '2 horas',
			precio: 100,
		},
		{
			id: 2,
			nombre: 'Ruta 2',
			duración: '3 horas',
			precio: 200,
		},
		{
			id: 3,
			nombre: 'Ruta 3',
			duración: '4 horas',
			precio: 300,
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default RoutesAdmin
