/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik'
import { ReactElement } from 'react'
import { len } from 'common/utils/len'
import { Input } from './Input'
import { InputProps } from './Input.types'

export function InputFormik<T extends string = string>({
	label,
	name,
	...props
}: InputProps): ReactElement {
	const [field, meta] = useField<T>({
		name,
		...props,
	})

	return (
		<Input
			{...props}
			{...field}
			value={String(field.value)}
			name={String(name)}
			label={label}
			status={meta.touched && len(meta.error) > 0 ? 'danger' : 'normal'}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			message={meta.touched && len(meta.error) > 0 ? meta.error : ''}
		/>
	)
}
