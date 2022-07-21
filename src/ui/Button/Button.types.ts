import { Status } from 'common'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Simplify } from 'type-fest'

export type ButtonProps = Simplify<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
		status?: Status | `${Status}`
		pill?: boolean
		variant?: 'gradient' | 'normal' | 'outline'
		loading?: boolean
	}
>
