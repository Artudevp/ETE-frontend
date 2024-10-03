import Styles from './ModalAdmin.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'

function ModalAdmin({ active, setActive, setData, content, rowSelected }) {
	const [form, setForm] = useState({})

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setData(form)
		e.target.reset()
	}

	useEffect(() => {
		if (rowSelected !== null) {
			setForm(rowSelected)
		}
	}, [rowSelected])

	return (
		<div
			className={Styles.modal}
			style={{
				opacity: active ? '1' : '0',
				pointerEvents: active ? 'all' : 'none',
			}}
		>
			<div className={Styles.modalContent}>
				<h2>{content.title}</h2>
				<form className={Styles.modalForm} onSubmit={handleSubmit}>
					<div className={Styles.modalFormInputs}>
						{content.inputs.map((input, index) => (
							<input
								key={index}
								type={input.type}
								placeholder={input.placeholder}
								name={input.name}
								onChange={handleChange}
								value={form[input.name]}
								required
							/>
						))}
					</div>
					<div className={Styles.modalFormButtons}>
						<button type='submit'>{content.button}</button>
					</div>
				</form>
				<button className={Styles.modalClose} onClick={() => setActive(false)}>
					<IoCloseOutline size={30} color='#fff' />
				</button>
			</div>
		</div>
	)
}

export default ModalAdmin
