import { Meta, Story } from '@storybook/react'
import { Textarea } from './Textarea'
import { TextareaProps } from './Textarea.types'

export default {
	title: 'Textarea',
	component: Textarea,
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
const Template: Story<TextareaProps> = args => <Textarea {...args} />
export const Default = Template.bind({})
