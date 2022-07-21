import { Meta, Story } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps } from './Button.types'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		pill: { control: 'boolean' },
		loading: { control: 'boolean' },
		variant: {
			control: {
				type: 'select',
				options: ['gradient', 'normal', 'outline'],
			},
		},
		status: {
			control: {
				type: 'select',
				options: ['normal', 'info', 'success', 'warning', 'danger'],
			},
		},
	},
	args: {
		children: 'Button',
	},
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = args => <Button {...args} />
export const Default = Template.bind({})
