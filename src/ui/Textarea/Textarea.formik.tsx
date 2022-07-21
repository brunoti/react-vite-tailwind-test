/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik'
import { ReactElement } from 'react'
import { Merge } from 'type-fest'
import { len } from 'common/utils/len'
import { Textarea } from './Textarea'
import { TextareaProps } from './Textarea.types'

export function TextareaFormik<T extends object>({
	label,
	name,
	...props
}: Merge<TextareaProps, { name: keyof T }>): ReactElement {
	const [field, meta] = useField<T>({
		name: String(name),
		...props,
	})

	return (
		<Textarea
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
