import kurasu from 'kurasu'
import { merge } from 'common/utils/tailwind'

export const InputGroup = kurasu.div(
	merge([
		'w-full mb-4 space-y-4 sm:space-y-0 space-x-4 flex flex-col sm:flex-row shrink-0',
	]),
)
