import { Simplify } from 'type-fest'
import { InputProps } from 'ui/Input'

export type MaskedInputProps = Simplify<
	InputProps & {
		name: string
		value: number | string
		format: (value: number | string) => string
		unformat: (value: string) => string
		onChangeText: (result: MaskResult) => void
	}
>

export type MaskResult = {
	formatted: string
	unformatted: string
}

export type Mask = {
	format: (value: number | string) => string
	unformat: (value: string) => string
}
