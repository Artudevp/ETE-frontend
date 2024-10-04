import { useState, useEffect, useCallback } from 'react'

const useEntityManagement = (
	getEntities,
	addEntity,
	updateEntity,
	deleteEntity,
	entityName,
) => {
	const [entities, setEntities] = useState([])

	const fetchEntities = useCallback(async () => {
		try {
			const data = await getEntities()
			setEntities(data)
		} catch (error) {
			console.error(`Error al obtener ${entityName}:`, error)
		}
	}, [getEntities, entityName])

	const handleSetEntity = useCallback(
		async entityData => {
			try {
				const data = await addEntity(entityData)
				setEntities(prevEntities => [...prevEntities, data])
			} catch (error) {
				console.error(`Error al agregar ${entityName}:`, error)
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
			} catch (error) {
				console.error(`Error al actualizar ${entityName}:`, error)
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
			} catch (error) {
				console.error(`Error al eliminar ${entityName}:`, error)
			}
		},
		[deleteEntity, entityName],
	)

	useEffect(() => {
		fetchEntities()
	}, [fetchEntities])

	return {
		entities,
		handleSetEntity,
		handleUpdateEntity,
		handleDeleteEntity,
	}
}

export default useEntityManagement
