import 'twin.macro'
import type { CSSProp, css as cssImport } from 'styled-components'
import type styledImport from 'styled-components'

declare module 'twin.macro' {
	// The styled and css imports
	const styled: typeof styledImport
	const css: typeof cssImport
}

declare module 'react' {
	// The css prop
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSProp
		tw?: string
	}
	// The inline svg css prop
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface SVGProperties<T> extends SVGProperties<SVGSVGElement> {
		css?: CSSProp
		tw?: string
	}
}

// The 'as' prop on styled components
declare global {
	namespace JSX {
		interface IntrinsicAttributes<T> extends DOMAttributes<T> {
			as?: Element | string
		}
	}
}
