import { useField } from 'formik'
import { ChangeEvent, ReactElement, useRef, useState } from 'react'
import { Button, Cropper } from 'ui'
import { head } from 'common/utils/head'
import { Label, Group, Placeholder, Avatar } from './AvatarInput.styles'
import { AvatarInputProps } from './AvatarInput.types'
import { fileToBase64 } from 'common/utils'
import { len } from 'common/utils/len'

export function AvatarInput({ name }: AvatarInputProps): ReactElement {
	const [image, setImage] = useState<string>()
	const inputFileRef = useRef<HTMLInputElement>(null)
	const [showEditor, setShowEditor] = useState<boolean>(false)
	const [field, meta, helper] = useField<string>({ name })

	const handleButtonClick = (): unknown => inputFileRef.current?.click()
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const file = head([...(event.target.files ?? [])])
		if (!file) {
			return
		}

		fileToBase64(file)
			.then((base64: string) => {
				helper.setTouched(true)
				setImage(base64)
				setShowEditor(true)
			})
			.catch(error => console.error(error))
	}

	const handleCloseEditor = (): void => setShowEditor(false)
	const handleEditImage = (): void => setShowEditor(true)
	const handleCrop = (base64: string): void => {
		helper.setValue(base64)
		setShowEditor(false)
	}

	return (
		<>
			<Group>
				<Label htmlFor={name}>
					{field.value ? <Avatar src={field.value} /> : <Placeholder />}
					<input
						ref={inputFileRef}
						type="file"
						name={name}
						id={name}
						className="hidden"
						accept="image/*"
						onChange={handleFileChange}
					/>
					{meta.touched && len(meta.error) > 0 && (
						<p className="mt-2 rounded-md border border-red-500 px-4 py-1 text-sm text-red-500">
							{meta.error}
						</p>
					)}
				</Label>
				<div className="flex flex-col space-y-4">
					<Button variant="outline" onClick={handleButtonClick}>
						Selecione seu avatar
					</Button>
					<Button variant="outline" status="success" onClick={handleEditImage}>
						Editar imagem
					</Button>
				</div>
			</Group>
			<Cropper
				onCrop={handleCrop}
				show={showEditor}
				src={image}
				onClose={handleCloseEditor}
			/>
		</>
	)
}
