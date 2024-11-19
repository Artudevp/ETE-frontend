import {
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
	RutasProvider,
	ProductosProvider
} from './ClientProviders'

const providers = [
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
	RutasProvider,
	ProductosProvider
]

export const ClientProvider = ({ children }) => {
	return providers.reduceRight((acc, Provider) => {
		return <Provider>{acc}</Provider>
	}, children)
}
