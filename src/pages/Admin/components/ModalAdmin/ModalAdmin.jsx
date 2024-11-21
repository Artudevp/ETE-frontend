import Styles from './ModalAdmin.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export function ModalAdmin({
	active,
	setActive,
	setData,
	content,
	rowSelected,
}) {
	const [form, setForm] = useState({})

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setData(form)
		e.target.reset()
		setForm({})
		setActive(false)
	}

	const handleFocus = e => {
		e.target.previousElementSibling.classList.add(Styles.active)
	}

	const handleBlur = e => {
		if (e.target.value === '') {
			e.target.previousElementSibling.classList.remove(Styles.active)
		}
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
							<div key={index} className={Styles.modalFormInput}>
								<label
									htmlFor={input.name}
									className={Styles.modalFormInputLabel}
									style={{
										top: form[input.name] ? '-10px' : '25%',
										left: form[input.name] ? '0px' : '10px',
										transform: form[input.name] ? 'scale(0.8)' : 'scale(1)',
									}}
								>
									{input.placeholder}
								</label>

								{input.type === 'select' ? (
									<select
										id={input.name}
										name={input.name}
										onChange={handleChange}
										value={form[input.name]}
										onFocus={handleFocus}
										onBlur={handleBlur}
										required
									>
										<option value=''></option>
										{input.options.map(option => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								) : (
									<input
										id={input.name}
										type={input.type}
										name={input.name}
										onChange={handleChange}
										value={form[input.name]}
										onFocus={handleFocus}
										onBlur={handleBlur}
										disabled={input.disabled || false}
										required={input.required !== false}
									/>
								)}
							</div>
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

ModalAdmin.propTypes = {
	active: PropTypes.bool,
	setActive: PropTypes.func,
	setData: PropTypes.func,
	content: PropTypes.shape({
		title: PropTypes.string,
		button: PropTypes.string,
		inputs: PropTypes.array,
	}),
	rowSelected: PropTypes.object,
}
