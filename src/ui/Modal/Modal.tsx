import { ReactElement } from 'react'
import {
	CloseButton,
	Container,
	Content,
	Footer,
	HeaderRoot,
	Root,
	Title,
} from './Modal.styles'
import { ModalHeaderProps, ModalProps } from './Modal.types'

function Modal({ open, children, ...props }: ModalProps): ReactElement {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Root open={open} tabIndex={-1} aria-hidden={open} {...props}>
			<Container>{children}</Container>
		</Root>
	)
}

Modal.Content = Content

Modal.Footer = Footer

Modal.Header = function ModalHeader({
	title,
	onRequestClose,
}: ModalHeaderProps): ReactElement {
	return (
		<HeaderRoot>
			<Title>{title}</Title>
			<CloseButton type="button" onClick={onRequestClose}>
				<svg
					aria-hidden="true"
					className="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</CloseButton>
		</HeaderRoot>
	)
}

export { Modal }
