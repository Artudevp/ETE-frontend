import { useState, useEffect, useCallback } from 'react'

const useEntityManagement = (
	getEntities,
	addEntity,
	updateEntity,
	deleteEntity,
	entityName,
) => {
	const errorModalState = {
		message: null,
		details: null,
	}
	const [entities, setEntities] = useState([])
	const [errorModal, setErrorModal] = useState(errorModalState)

	const fetchEntities = useCallback(async () => {
		try {
			const data = await getEntities()
			setEntities(data)
			setErrorModal(errorModalState)
		} catch (error) {
			console.error(`Error al obtener ${entityName}:`, error)
			setErrorModal({
				details: error.message,
				message: 'Error al obtener ' + entityName,
			})
		}
	}, [getEntities, entityName])

	const handleSetEntity = useCallback(
		async entityData => {
			try {
				const data = await addEntity(entityData)
				setEntities(prevEntities => [...prevEntities, data])
				setErrorModal(errorModalState)
			} catch (error) {
				console.error(`Error al agregar ${entityName}:`, error)
				setErrorModal({
					details: error.message,
					message: 'Error al agregar ' + entityName,
				})
			}
		},
		[addEntity, entityName],
	)

	const handleUpdateEntity = useCallback(
		async entityData => {
			try {
				const data = await updateEntity(entityData)
				setEntities(prevEntities =>
					prevEntities.map(entity =>
						entity[`id_${entityName}`] === entityData[`id_${entityName}`]
							? data
							: entity,
					),
				)
				setErrorModal(errorModalState)
			} catch (error) {
				console.error(`Error al actualizar ${entityName}:`, error)
				setErrorModal({
					details: error.message,
					message: 'Error al actualizar ' + entityName,
				})
			}
		},
		[updateEntity, entityName],
	)

	const handleDeleteEntity = useCallback(
		async id => {
			try {
				await deleteEntity(id)
				setEntities(prevEntities =>
					prevEntities.filter(entity => entity[`id_${entityName}`] !== id),
				)
				setErrorModal(errorModalState)
			} catch (error) {
				console.error(`Error al eliminar ${entityName}:`, error)
				setErrorModal({
					details: error.message,
					message: 'Error al eliminar ' + entityName,
				})
			}
		},
		[deleteEntity, entityName],
	)

	const handleClearError = () => {
		setErrorModal(errorModalState)
	}

	useEffect(() => {
		fetchEntities()
	}, [fetchEntities])

	return {
		entities,
		handleSetEntity,
		handleUpdateEntity,
		handleDeleteEntity,
		errorModal,
		handleClearError,
	}
}

export default useEntityManagement
