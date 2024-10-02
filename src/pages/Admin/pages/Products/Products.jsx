import PageSchema from '../PageSchema/PageSchema'

function Products() {
	const title = 'Gestión de Productos'
	const columns = ['ID', 'Categoria', 'Nombre', 'Precio', 'Cantidad']
	const data = [
		{
			id: 1,
			categoria: 'Categoria 1',
			nombre: 'Producto 1',
			precio: 100,
			cantidad: 10,
		},
		{
			id: 2,
			categoria: 'Categoria 2',
			nombre: 'Producto 2',
			precio: 200,
			cantidad: 20,
		},
		{
			id: 3,
			categoria: 'Categoria 3',
			nombre: 'Producto 3',
			precio: 300,
			cantidad: 30,
		},
	]
	const actions = ['Nuevo', 'Editar', 'Eliminar']

	return (
		<PageSchema title={title} columns={columns} data={data} actions={actions} />
	)
}

export default Products
