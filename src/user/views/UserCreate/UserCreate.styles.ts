import kurasu from 'kurasu'
import { merge } from 'common/utils/tailwind'

export const Typography = kurasu.p('dark:text-white text-gray-900')

export const Container = kurasu.div(
	merge([
		'min-h-screen p-10 w-full sm:w-[720px] m-auto',
		'flex flex-col items-center justify-center',
	]),
)
