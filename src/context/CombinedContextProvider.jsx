import { UsersProvider } from './UsersContext'
import { ProductsProvider } from './ProductsContext'
import { ClientsProvider } from './ClientsContext'
import { ActivitiesProvider } from './ActivitiesContext'
import { RoutesProvider } from './RoutesContext'
import { HospitalityProvider } from './HospitalityContext'

const providers = [
	UsersProvider,
	ProductsProvider,
	ClientsProvider,
	ActivitiesProvider,
	RoutesProvider,
	HospitalityProvider,
]

export const CombinedContextProvider = ({ children }) => {
	return providers.reduceRight((acc, Provider) => {
		return <Provider>{acc}</Provider>
	}, children)
}
