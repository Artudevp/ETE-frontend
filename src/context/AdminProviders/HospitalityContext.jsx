import { createContext, useContext } from 'react'
import useEntityManagement from '../../hooks/useEntityManagement'
import {
	getHospitality,
	addHospitality,
	updateHospitality,
	deleteHospitality,
} from '../../services/Hospedajes'

export const HospitalityContext = createContext()

export const useHospitality = () => {
	return useContext(HospitalityContext)
}

export const HospitalityProvider = ({ children }) => {
	const {
		entities: hospitality,
		handleSetEntity: handleSetHospitality,
		handleUpdateEntity: handleUpdateHospitality,
		handleDeleteEntity: handleDeleteHospitality,
		errorModal,
		handleClearError,
	} = useEntityManagement(
		getHospitality,
		addHospitality,
		updateHospitality,
		deleteHospitality,
		'habitacion',
	)

	return (
		<HospitalityContext.Provider
			value={{
				hospitality,
				handleSetHospitality,
				handleUpdateHospitality,
				handleDeleteHospitality,
				errorModal,
				handleClearError,
			}}
		>
			{children}
		</HospitalityContext.Provider>
	)
}
