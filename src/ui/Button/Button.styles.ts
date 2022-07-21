import kurasu from 'kurasu'
import { merge } from 'common/utils/tailwind'
import { ButtonProps } from './Button.types'

export const Root = kurasu.button<ButtonProps>(
	({ status = 'normal', variant = 'normal', pill = false }) =>
		merge([
			'text-white font-medium text-sm text-center',
			'px-5 py-2.5',
			pill ? 'rounded-full' : 'rounded-lg',
			variant === 'gradient' &&
				'bg-gradient-to-r hover:bg-gradient-to-br text-white',
			variant === 'outline' && '!bg-transparent border-0',
			status === 'normal' &&
				'border border-gray-200 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 text-gray-900 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 from-gray-50 via-gray-100 to-gray-200 dark:from-gray-500 dark:via-gray-600 dark:to-gray-700',
			status === 'info' &&
				'border-blue-200 bg-blue-700 hover:bg-blue-800 focus:z-10 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700 from-blue-500 via-blue-600 to-blue-700',
			status === 'danger' &&
				'border-red-200 bg-red-500 hover:bg-red-600 focus:z-10 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-700 dark:bg-red-500 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700 from-red-500 via-red-600 to-red-700',
			status === 'warning' &&
				'border-yellow-200 bg-yellow-500 hover:bg-yellow-400 focus:z-10 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-700 dark:bg-yellow-500 dark:border-yellow-600 dark:hover:text-white dark:hover:bg-yellow-600 from-yellow-500 via-yellow-600 to-yellow-700',
			status === 'success' &&
				'border-green-200 bg-green-500 hover:bg-green-600 focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:border-green-600 dark:hover:text-white dark:hover:bg-green-700 from-green-500 via-green-600 to-green-700',
			status === 'normal' && variant === 'outline' && 'border-0',
			status === 'info' &&
				variant === 'outline' &&
				'text-blue-700 hover:text-blue-800 hover:dark:text-blue-600',
			status === 'danger' &&
				variant === 'outline' &&
				'text-red-500 hover:text-red-700 hover:dark:text-red-400',
			status === 'warning' &&
				variant === 'outline' &&
				'text-yellow-600 hover:text-yellow-700 hover:dark:text-yellow-500',
			status === 'success' &&
				variant === 'outline' &&
				'text-green-700 hover:text-green-800 hover:dark:text-green-600',
		]),
)

// <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Blue</button>
// <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green</button>
// <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cyan</button>
// <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal</button>
// <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Lime</button>
// <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red</button>
// <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink</button>
// <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple</button>
