import { ModalProps } from 'flowbite-react'
import { ComponentProps } from 'react'
import Editor from 'react-cropper'
import { Merge, Simplify } from 'type-fest'

export type CropperProps = Simplify<
	Merge<
		Merge<ComponentProps<typeof Editor>, ModalProps>,
		{ onCrop?: (img: string) => void }
	>
>
