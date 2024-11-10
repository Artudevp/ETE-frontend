import {
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
	RutasProvider,
} from './ClientProviders'

const providers = [
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
	RutasProvider,
]

export const ClientProvider = ({ children }) => {
	return providers.reduceRight((acc, Provider) => {
		return <Provider>{acc}</Provider>
	}, children)
}
