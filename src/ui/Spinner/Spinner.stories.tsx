import { Meta, Story } from '@storybook/react'
import { Spinner } from './Spinner'
import { SpinnerProps } from './Spinner.types'

export default {
	title: 'Spinner',
	component: Spinner,
} as Meta

// 👇 We create a “template” of how args map to rendering
const Template: Story<SpinnerProps> = args => <Spinner {...args} />
export const Default = Template.bind({})
