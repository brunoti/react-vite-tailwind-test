import { compose } from 'fnts'
import clsx from 'classnames'
import { twMerge } from 'tailwind-merge'

export const merge = compose(twMerge, clsx)
