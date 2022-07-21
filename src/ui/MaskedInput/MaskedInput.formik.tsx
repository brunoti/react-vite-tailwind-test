/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik'
import { ReactElement } from 'react'
import { len } from 'common/utils/len'
import { MaskedInput } from './MaskedInput'
import { MaskedInputProps, MaskResult } from './MaskedInput.types'

export function MaskedInputFormik({
	label,
	name,
	...props
}: Omit<MaskedInputProps, 'onChangeText' | 'value'>): ReactElement {
	const [field, meta, { setValue }] = useField<string>({
		name,
		...props,
	})

	const handleChangeText = (result: MaskResult): void => {
		setValue(result.formatted)
	}

	return (
		<MaskedInput
			{...props}
			{...field}
			onChange={undefined}
			onChangeText={handleChangeText}
			value={String(field.value)}
			name={String(name)}
			label={label}
			status={meta.touched && len(meta.error) > 0 ? 'danger' : 'normal'}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			message={meta.touched && len(meta.error) > 0 ? meta.error : ''}
		/>
	)
}
