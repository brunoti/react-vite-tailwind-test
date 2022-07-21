import { UnknownObject } from 'common'
import { Formik } from 'formik'
import { ReactElement } from 'react'
import { UserDataForm } from 'user/forms'
import { useCreateUser } from 'user/mutations'
import { UserCreateSchema, UserCreateType } from 'user/schemas/UserCreateSchema'
import { Container } from './UserCreate.styles'

export function UserCreate(): ReactElement {
	const createUserMutation = useCreateUser()
	const handleSubmit = (values: UserCreateType): Promise<UnknownObject> =>
		createUserMutation.mutateAsync(values)

	return (
		<Container>
			<Formik<UserCreateType>
				component={UserDataForm}
				onSubmit={handleSubmit}
				initialValues={{
					foto: '',
					nome: '',
					datanascimento: '',
					emailacademico: '',
					emailpessoal: '',
					cpf: '',
					rg: '',
					orgaoexp: '',
					telefone: '',
					celular: '',
					observacoes: '',
				}}
				validationSchema={UserCreateSchema}
			/>
		</Container>
	)
}
