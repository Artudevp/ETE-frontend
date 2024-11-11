import { createContext, useContext, useState } from 'react'

export const ClientContext = createContext()

export const useClient = () => {
	return useContext(ClientContext)
}

export const ClientMainProvider = ({ children }) => {
	const [hospedajeSelected, setHospedajeSelected] = useState({})
	const [actividadSelected, setActividadSelected] = useState({})
	const [rutaSelected, setRutaSelected] = useState({})

	return (
		<ClientContext.Provider
			value={{
				hospedajeSelected,
				setHospedajeSelected,
				actividadSelected,
				setActividadSelected,
				rutaSelected,
				setRutaSelected,
			}}
		>
			{children}
		</ClientContext.Provider>
	)
}

export default ClientMainProvider
