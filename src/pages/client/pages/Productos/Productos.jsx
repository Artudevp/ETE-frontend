import Style from './Productos.module.css'
import Card from '../../components/Card/Card'
import { useProductos, useClient } from '../../../../context/ClientProviders'

function Productos() {
	const { productos } = useProductos()
	const { setProductoSelected } = useClient()

	const handleProductoSelected = producto => {
		setProductoSelected(producto)
	}

	return (
		<div className={Style.containerProductos}>
			{/* <div className={Style.containerProducto}>
				<h1>Productos para comprar</h1>
				<div className={Style.productoList}>
					<Card />
					<Card />
					<Card />
				</div>
			</div> */}
			<div className={Style.containerProducto}>
				<h1>Productos disponibles</h1>
				<div className={Style.productoList}>
					{productos?.length > 0 ? (
						productos.map(
							(item, index) =>
								item.disponible && (
									<Card
										key={index}
										tipo_prod={item.nombre}
										precio_prod={item.precio}
										producto={item}
										handleHospedajeSelected={handleProductoSelected}
										ruta='productos/producto'
									/>
								),
						)
					) : (
						<p>No hay productos disponibles</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default Productos
