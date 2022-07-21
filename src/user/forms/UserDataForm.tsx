import { ReactElement } from 'react'
import { Input, Submit, Textarea, MaskedInput } from 'ui/formik'
import { InputGroup } from 'ui'
import { AvatarInput } from 'user/components'
import { cpf, date, phone, rg } from 'common/utils/masks'

export function UserDataForm(): ReactElement {
	return (
		<div className="w-full space-y-4">
			<AvatarInput name="foto" />
			<InputGroup>
				<Input name="nome" label="Nome completo" />
				<MaskedInput
					{...date}
					name="datanascimento"
					label="Data de Nascimento"
				/>
			</InputGroup>
			<InputGroup>
				<MaskedInput {...cpf} name="cpf" label="CPF" />
				<div className="flex w-1/2 shrink-0 flex-row space-x-4">
					<MaskedInput {...rg} name="rg" label="RG" />
					<div className="w-3/4">
						<Input name="orgaoexp" label="Orgão expeditor" />
					</div>
				</div>
			</InputGroup>
			<InputGroup>
				<Input name="emailpessoal" label="Email pessoal" />
				<Input name="emailacademico" label="Email academico" />
			</InputGroup>
			<InputGroup>
				<MaskedInput {...phone} name="telefone" label="Telefone" />
				<MaskedInput {...phone} name="celular" label="Celular" />
			</InputGroup>
			<InputGroup>
				<Textarea name="observacoes" label="Observações" />
			</InputGroup>
			<InputGroup className="justify-end">
				<Submit status="info">Enviar</Submit>
			</InputGroup>
		</div>
	)
}
