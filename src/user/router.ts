import { AppRoute } from 'common'
import { lazy } from 'react'

export enum UserPaths {
	Create = '/users/create',
}

export const USER_ROUTES: AppRoute<UserPaths>[] = [
	{
		path: UserPaths.Create,
		component: lazy(() => import('./views/UserCreate/UserCreate.lazy')),
	},
]
