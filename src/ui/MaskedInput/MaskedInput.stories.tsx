import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { MaskedInput } from './MaskedInput'
import { MaskedInputProps, MaskResult } from './MaskedInput.types'

export default {
	title: 'MaskedInput',
	component: MaskedInput,
	argTypes: {
		disabled: { control: 'boolean' },
		mask: {
			control: {
				type: 'radio',
				labels: Object.keys(MaskedInput.masks),
			},
			options: Object.keys(MaskedInput.masks),
			defaultValue: 'cpf',
		},
		message: { control: 'text' },
		label: { control: 'text' },
	},
	args: {
		label: 'Value',
	},
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<MaskedInputProps & { mask: string }> = args => {
	const [value, setValue] = useState<MaskResult>({
		formatted: '',
		unformatted: '',
	})

	return (
		<div>
			<MaskedInput
				{...args}
				// eslint-disable-next-line react/destructuring-assignment
				{...MaskedInput.masks[args.mask]}
				onChangeText={setValue}
			/>
			<pre className="mt-5 dark:text-white">
				{JSON.stringify(value, undefined, 2)}
			</pre>
		</div>
	)
}

export const Default = Template.bind({})
