import { USER_ROUTES } from 'user'
import { AppRoute } from 'common'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from 'common/views'

const routes: AppRoute<string>[] = [USER_ROUTES].flat()

export function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					{routes.map(({ path, component: Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
