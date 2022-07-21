import { merge } from 'common/utils/tailwind'
import kurasu from 'kurasu'
import { Status } from 'common'
import { InputProps } from './Input.types'

export const Field = kurasu.input<InputProps>(
	({ disabled = false, status = Status.normal }) =>
		merge([
			'block border w-full p-2.5 text-sm rounded-lg',
			disabled &&
				'bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500',
			status === 'normal' &&
				'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
			status === 'success' &&
				'bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500',
			status === 'danger' &&
				'bg-red-50 border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-red-500',
			status === 'info' &&
				'bg-blue-50 border-blue-500 text-blue-900 dark:text-blue-400 placeholder-blue-700 dark:placeholder-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-500',
			status === 'warning' &&
				'bg-yellow-50 border-yellow-500 text-yellow-900 dark:text-yellow-400 placeholder-yellow-700 dark:placeholder-yellow-500 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-yellow-500',
		]),
)

export const Label = kurasu.label<Pick<InputProps, 'status'>>(
	({ status = Status.normal }) =>
		merge([
			'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300',
			status === 'danger' && 'text-red-700 dark:text-red-500',
			status === 'info' && 'text-blue-700 dark:text-blue-500',
			status === 'success' && 'text-green-700 dark:text-green-500',
			status === 'warning' && 'text-yellow-700 dark:text-yellow-500',
		]),
)

export const Message = kurasu.p<Pick<InputProps, 'status'>>(
	({ status = Status.normal }) =>
		merge([
			'mt-2 text-sm text-gray-500 dark:text-gray-400',
			status === 'danger' && 'text-red-700 dark:text-red-500',
			status === 'info' && 'text-blue-700 dark:text-blue-500',
			status === 'success' && 'text-green-700 dark:text-green-500',
			status === 'warning' && 'text-yellow-700 dark:text-yellow-500',
		]),
)

export const Root = kurasu.div('block w-full')
