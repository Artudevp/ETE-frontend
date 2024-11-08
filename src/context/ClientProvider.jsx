import {
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
} from './ClientProviders'

const providers = [
	ClientMainProvider,
	AlojamientosProvider,
	ActividadesProvider,
]

export const ClientProvider = ({ children }) => {
	return providers.reduceRight((acc, Provider) => {
		return <Provider>{acc}</Provider>
	}, children)
}
