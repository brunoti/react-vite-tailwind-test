import type { HTMLAttributes } from 'react'
import { Simplify } from 'type-fest'

export type ModalProps = Simplify<
	HTMLAttributes<HTMLDivElement> & {
		open: boolean
		onClickBackdrop?: () => void
	}
>

export type ModalHeaderProps = Simplify<{
	title: string
	onRequestClose?: () => void
}>
