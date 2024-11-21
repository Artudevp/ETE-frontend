import habitación from '../../../../assets/habitacion.png'
import Style from './InfoProducto.module.css'
import { useClient } from '../../../../context/ClientProviders'

export function InfoProducto() {
	const { productoSelected } = useClient()
	const { nombre, precio, categoria, descripcion, disponible, cantidad } =
		productoSelected

	return (
		<div className={Style.main}>
			{disponible ? (
				<>
					<h1>Sobre el producto</h1>
					<div className={Style.container}>
						<div className={Style.boxLeft}>
							<img src={habitación} alt='Image Producto' />
							<div className={Style.descripProducto}>
								<h2>{nombre}</h2>
								<h4>Categoria: {categoria}</h4>
								<p>{descripcion}</p>
								<p className={Style.precioPro}>Precio: ${precio} C/U</p>
								<p>En inventario: {cantidad} disponibles</p>
							</div>
						</div>
						<div className={Style.boxRight}>
							<h2>No esperes más, y disfruta del producto {nombre}</h2>
							<button>Quiero comprarlo</button>
						</div>
					</div>
				</>
			) : (
				<h1>Producto no disponible</h1>
			)}
		</div>
	)
}
