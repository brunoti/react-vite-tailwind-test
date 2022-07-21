import { User } from 'user/types'
import { yup } from 'common/utils/yup'
import { validateCPF } from 'validations-br'
import { SchemaOf } from 'yup'

export type UserCreateType = User

export const UserCreateSchema: SchemaOf<UserCreateType> = yup.object({
	foto: yup.string().required().defined(),
	nome: yup.string().required().defined(),
	datanascimento: yup.string().required().defined(),
	emailacademico: yup.string().email().required().defined(),
	emailpessoal: yup.string().email().required().defined(),
	cpf: yup
		.string()
		.required()
		.defined()
		.test('is-cpf', 'CPF inválido', value =>
			value ? validateCPF(value) : true,
		),
	rg: yup
		.string()
		.required()
		.defined()
		.test('is-rg', 'RG inválido', value =>
			value ? /^\d+$/.test(value) : true,
		),
	orgaoexp: yup.string().required().defined(),
	telefone: yup.string().required().defined(),
	celular: yup.string().required().defined(),
	observacoes: yup.string().required().defined(),
})
