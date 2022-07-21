import { UserCircleIcon } from '@heroicons/react/solid'
import kurasu from 'kurasu'
import { InputGroup } from 'ui'

export const Label = kurasu.label('cursor-pointer')
export const Placeholder = kurasu(
	UserCircleIcon,
	'h-32 w-32 text-gray-200 dark:text-gray-300',
)
export const Avatar = kurasu.img(
	'h-32 w-32 text-gray-200 dark:text-gray-300 rounded-full',
)
export const Group = kurasu(InputGroup, 'items-center space-x-2')
