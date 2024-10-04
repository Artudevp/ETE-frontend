import { createContext, useContext, useState, useEffect } from 'react'
import {
	getHospitality,
	addHospitality,
	updateHospitality,
	deleteHospitality,
} from '../services/Hospedajes'

export const HospitalityContext = createContext()

export const useHospitality = () => {
	return useContext(HospitalityContext)
}

export const HospitalityProvider = ({ children }) => {
	const [hospitality, setHospitality] = useState([])

	const fetchHospitality = async () => {
		try {
			const data = await getHospitality()
			setHospitality(data)
		} catch (error) {
			console.error('Error al obtener hospedaje:', error)
		}
	}

	const handleSetHospitality = async hospedajeData => {
		try {
			const data = await addHospitality(hospedajeData)
			setHospitality([...hospitality, data])
		} catch (error) {
			console.error('Error al agregar hospedaje:', error)
		}
	}

	const handleUpdateHospitality = async hospedajeData => {
		try {
			const data = await updateHospitality(hospedajeData)
			setHospitality(
				hospitality.map(hospedaje =>
					hospedaje.id_hospedaje === hospedajeData.id_hospedaje
						? data
						: hospedaje,
				),
			)
		} catch (error) {
			console.error('Error al actualizar hospedaje:', error)
		}
	}

	const handleDeleteHospitality = async id => {
		try {
			await deleteHospitality(id)
			setHospitality(
				hospitality.filter(hospedaje => hospedaje.id_hospedaje !== id),
			)
		} catch (error) {
			console.error('Error al eliminar hospedaje:', error)
		}
	}

	useEffect(() => {
		fetchHospitality()
	}, [])

	return (
		<HospitalityContext.Provider
			value={{
				hospitality,
				fetchHospitality,
				handleSetHospitality,
				handleUpdateHospitality,
				handleDeleteHospitality,
			}}
		>
			{children}
		</HospitalityContext.Provider>
	)
}
