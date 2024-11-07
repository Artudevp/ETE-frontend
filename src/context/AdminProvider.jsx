import {
	UsersProvider,
	ProductsProvider,
	ClientsProvider,
	ActivitiesProvider,
	RoutesProvider,
	HospitalityProvider,
} from './AdminProviders'

const providers = [
	UsersProvider,
	ProductsProvider,
	ClientsProvider,
	ActivitiesProvider,
	RoutesProvider,
	HospitalityProvider,
]

export const AdminProvider = ({ children }) => {
	return providers.reduceRight((acc, Provider) => {
		return <Provider>{acc}</Provider>
	}, children)
}
