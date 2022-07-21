import type { TextareaHTMLAttributes } from 'react'
import type { Simplify } from 'type-fest'
import { Status } from 'common/types'

export type TextareaProps = Simplify<
	TextareaHTMLAttributes<HTMLTextAreaElement> & {
		label?: string
		status?: Status | `${Status}`
		message?: string
	}
>
