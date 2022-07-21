import type { InputHTMLAttributes } from 'react'
import type { Simplify } from 'type-fest'
import { Status } from '../../common/types/Status'

export type InputProps = Simplify<
	InputHTMLAttributes<HTMLInputElement> & {
		label?: string
		status?: Status | `${Status}`
		message?: string
	}
>
