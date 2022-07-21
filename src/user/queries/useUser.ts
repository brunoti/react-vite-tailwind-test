import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { api } from 'common/client'
import { HTTPError } from 'ky'
import { User } from 'user/types'

export function fetchUser(token: string): Promise<User> {
	return api(`datasnap/rest/Transfer/CarregaAluno/${token}`, {
		method: 'GET',
	}).json<User>()
}

export function useUser(
	token = '59a04cb3-e9b1-40c1-908c-e4591844d5410',
): UseQueryResult<User, HTTPError> {
	return useQuery<User, HTTPError>(['user'], () => fetchUser(token))
}
