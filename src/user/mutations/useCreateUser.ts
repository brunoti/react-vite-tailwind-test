import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { UnknownObject } from 'common'
import { api } from 'common/client'
import { HTTPError } from 'ky'
import { UserCreateType } from 'user/schemas/UserCreateSchema'

export function createUser(data: UserCreateType): Promise<UnknownObject> {
	return api('SalvaAluno', {
		method: 'POST',
		json: { ...data, token_aluno: '59a04cb3-e9b1-40c1-908c-e4591844d541' },
	}).json<UnknownObject>()
}

export function useCreateUser(): UseMutationResult<
	UnknownObject,
	HTTPError,
	UserCreateType
> {
	return useMutation<UnknownObject, HTTPError, UserCreateType>(createUser, {
		retry: false,
	})
}
