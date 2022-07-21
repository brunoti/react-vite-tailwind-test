export function deepFreeze<T extends object>(obj: T): Readonly<T> {
	for (const prop of Object.keys(obj)) {
		const key = prop as keyof T
		const value = obj[key]
		if (typeof value === 'object') {
			deepFreeze(value as unknown as object)
		}
	}

	return Object.freeze(obj)
}
