export const fileToBase64 = (file: File): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.addEventListener('load', () => resolve(String(reader.result)))
		reader.addEventListener('error', error => reject(error))
	})
