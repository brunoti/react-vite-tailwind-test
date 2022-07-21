import { ComponentType, LazyExoticComponent } from 'react'

export type AppRoute<T extends string> = {
	path: T
	component:
		| ComponentType<unknown>
		| LazyExoticComponent<ComponentType<unknown>>
}
