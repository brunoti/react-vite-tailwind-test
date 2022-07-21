import { Meta, Story } from '@storybook/react'
import { Input } from './Input'
import { InputProps } from './Input.types'

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		disabled: { control: 'boolean' },
		status: {
			control: {
				type: 'select',
				options: ['normal', 'info', 'success', 'warning', 'danger'],
			},
		},
		message: { control: 'text' },
		label: { control: 'text' },
	},
	args: {
		label: 'Name',
		placeholder: 'Enter your name',
	},
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = args => <Input {...args} />
export const Default = Template.bind({})
