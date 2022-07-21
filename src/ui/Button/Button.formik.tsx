import { useFormikContext } from 'formik'
import { ReactElement } from 'react'
import { Button } from './Button'
import { ButtonProps } from './Button.types'

export function Submit({
	children,
	...props
}: Omit<ButtonProps, 'loading'>): ReactElement {
	const state = useFormikContext()
	const handleClick = (): void => {
		// eslint-disable-next-line no-console
		state.submitForm().catch(console.error)
	}

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Button {...props} onClick={handleClick} loading={state.isSubmitting}>
			{children}
		</Button>
	)
}
