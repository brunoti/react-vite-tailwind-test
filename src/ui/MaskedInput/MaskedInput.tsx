import { deepFreeze } from 'common/utils'
import { identity } from 'fnts'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { Input } from 'ui/Input'
import { Mask, MaskedInputProps } from './MaskedInput.types'

function MaskedInput({
	format,
	unformat,
	value,
	...props
}: MaskedInputProps): ReactElement {
	const [maskedValue, setMaskedValue] = useState<string>(() =>
		value ? format(value) : '',
	)

	const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value: newValue } = event.target
		setMaskedValue(format(newValue))
		props.onChangeText({
			formatted: format(newValue),
			unformatted: unformat(newValue),
		})
	}

	useEffect(() => {
		if (value !== maskedValue) {
			setMaskedValue(format(value))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Input {...props} value={maskedValue} onInput={handleInput} />
}

MaskedInput.masks = deepFreeze<Record<string, Mask>>({
	phone: {
		format: (value): string => {
			const cleanValue = String(value).replace(/\D/g, '')
			const lastDigits = cleanValue.slice(-11)

			if (lastDigits.length > 10) {
				return lastDigits.replace(/(.{2})(.)(.{4})(.{4})/, '($1) $2 $3-$4')
			}

			return lastDigits
				.padStart(10, '_')
				.replace(/(.{2})(.{4})(.{4})/, '($1) $2-$3')
		},
		unformat: (value): string => String(value).replace(/\D/g, ''),
	},
	rg: {
		format: (value): string => String(value).replace(/\D/g, '').slice(-15),
		unformat: identity,
	},
	date: {
		format: (value): string =>
			String(value)
				.replace(/\D/g, '')
				.slice(-8)
				.padStart(8, '_')
				.replace(/(.{2})(.{2})(.{4})/, '$1/$2/$3'),
		unformat: identity,
	},
	cpf: {
		format: (value): string => {
			const cleanValue = String(value).replace(/\D/g, '')
			const formatedValue = cleanValue
				.slice(-11)
				.padStart(11, '_')
				.replace(/(.{3})(.{3})(.{3})(.{2})/, '$1.$2.$3-$4')
			return formatedValue
		},
		unformat: (value): string => {
			const cleanValue = value.replace(/\D/g, '')
			return cleanValue
		},
	},
})

export { MaskedInput }
