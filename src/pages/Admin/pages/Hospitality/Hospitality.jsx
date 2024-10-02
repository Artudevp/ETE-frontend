import PageSchema from '../PageSchema/PageSchema'

function Hospitality() {
	const title = 'Gestión de Hospedaje'
	const columns = ['ID', 'Nombre', 'Dirección', 'Precio']
	const data = [
		{
			id: 1,
			nombre: 'Hotel 1',
			dirección: 'Dirección del hotel 1',
			precio: 100,
		},
		{
			id: 2,
			nombre: 'Hotel 2',
			dirección: 'Dirección del hotel 2',
			precio: 200,
		},
		{
			id: 3,
			nombre: 'Hotel 3',
			dirección: 'Dirección del hotel 3',
			precio: 300,
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default Hospitality
