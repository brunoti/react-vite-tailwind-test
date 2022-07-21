import ky from 'ky'

export const api = ky.create({
	prefixUrl: 'https://api.fegh.com.br/api/API.DLL',
})
