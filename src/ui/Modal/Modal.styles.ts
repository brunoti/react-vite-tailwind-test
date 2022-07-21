import { merge } from 'common/utils/tailwind'
import kurasu from 'kurasu'
import { ModalProps } from './Modal.types'

// eslint-disable-next-line unicorn/no-keyword-prefix
export const Root = kurasu.div<ModalProps>(({ open, className }) =>
	merge([
		!open && 'hidden',
		'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full',
		className,
	]),
)

export const Container = kurasu.div(
	'relative p-4 w-full max-w-2xl h-full md:h-auto',
)

export const Content = kurasu.div(
	'relative bg-white rounded-lg shadow dark:bg-gray-700',
)

export const Footer = kurasu.div(
	'flex items-center p-6 border-t border-gray-200 rounded-b space-x-2 dark:border-gray-600',
)

export const HeaderRoot = kurasu.div(
	'flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600',
)

export const Title = kurasu.h3(
	'text-xl font-semibold text-gray-900 dark:text-white',
)

export const CloseButton = kurasu.button(
	'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
)
