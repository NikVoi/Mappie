import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface IInput {
	label?: string
	type?: string
	value?: string
	placeholder: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
	label,
	type = 'text',
	value,
	placeholder,
	onChange,
}) => {
	return (
		<div className={styles.block}>
			<label className={styles.label}>{label}</label>

			<input
				className={styles.input}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			></input>
		</div>
	)
}

export default Input
