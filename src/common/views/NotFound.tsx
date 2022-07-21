import { ReactElement } from 'react'

export function NotFound(): ReactElement {
	return (
		<section className="flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-[5rem] font-extrabold tracking-tight text-blue-600 dark:text-blue-500 lg:text-[7rem]">
						404
					</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
						Algo está faltando =/
					</p>
					<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
						Pedimos desculpas, mas não encontramos o que você está procurando.
					</p>
					<a
						href="/"
						className="my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						Voltar para o início
					</a>
				</div>
			</div>
		</section>
	)
}
