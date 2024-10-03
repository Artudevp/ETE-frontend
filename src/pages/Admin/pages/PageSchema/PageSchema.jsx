import Styles from './PageSchema.module.css'

function PageSchema({
	title,
	columns,
	columnsDisplay,
	data,
	actions,
	activeModal,
	handleRowClick,
}) {
	return (
		<main className={Styles.main}>
			<section className={Styles.subHeader}>
				<ul>
					{actions.map((action, index) => (
						<li key={index}>
							<button onClick={() => activeModal(action)}>{action}</button>
						</li>
					))}
				</ul>
			</section>
			<section className={Styles.content}>
				<div className={Styles.titleBox}>
					<h1>{title}</h1>
				</div>
				<div className={Styles.containerAllTable}>
					<div className={Styles.tableContainer}>
						<table>
							<thead>
								<tr>
									{columnsDisplay.map((column, index) => (
										<th key={index}>{column}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{data.map((row, rowIndex) => (
									<tr key={rowIndex} onClick={() => handleRowClick(row)}>
										{columns.map((column, colIndex) => (
											<td key={colIndex}>{row[column.toLowerCase()]}</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className={Styles.pagination}>
						<button>Inicio</button>
						<button>Anterior</button>
						<button>Siguiente</button>
						<button>Final</button>
					</div>
				</div>
			</section>
		</main>
	)
}

export default PageSchema
