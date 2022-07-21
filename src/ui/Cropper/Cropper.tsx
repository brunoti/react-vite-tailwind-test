import { ReactElement, useRef } from 'react'
import Editor from 'react-cropper'
import CropperClass from 'cropperjs'
import { Modal } from 'flowbite-react'
import { CropperProps } from './Cropper.types'
import { Button } from 'ui'
import 'cropperjs/dist/cropper.css'
import './Cropper.css'

function getRoundedCanvas(sourceCanvas: CanvasImageSource): HTMLCanvasElement {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d') as CanvasRenderingContext2D

	const width = sourceCanvas.width as number
	const height = sourceCanvas.height as number

	canvas.width = width
	canvas.height = height

	context.imageSmoothingEnabled = true
	context.drawImage(sourceCanvas, 0, 0, width, height)
	context.globalCompositeOperation = 'destination-in'
	context.beginPath()
	context.arc(
		width / 2,
		height / 2,
		Math.min(width, height) / 2,
		0,
		2 * Math.PI,
		true,
	)
	context.fill()
	return canvas
}

export function Cropper({
	src,
	onCrop,
	onClose,
	show,
}: CropperProps): ReactElement {
	const cropperRef = useRef<HTMLImageElement & { cropper: CropperClass }>(null)

	const handleRotateLeft = (): unknown =>
		cropperRef.current?.cropper.rotate(-20)
	const handleRotateRight = (): unknown =>
		cropperRef.current?.cropper.rotate(20)

	const handleCrop = (): void => {
		const imageElement = cropperRef.current
		const cropper = imageElement?.cropper
		if (cropper) {
			const canvas = cropper.getCroppedCanvas({
				width: 600,
				height: 600,
			})
			onCrop?.(getRoundedCanvas(canvas).toDataURL())
		}
	}

	return (
		<Modal show={show} onClose={onClose}>
			<Modal.Header>Editar foto</Modal.Header>
			<Modal.Body>
				<div className="js-editor-container flex w-full flex-col items-center justify-center">
					<Editor
						src={src}
						className="h-[400px] w-[400px]"
						minCropBoxWidth={400}
						aspectRatio={1}
						guides={false}
						cropBoxResizable={false}
						cropBoxMovable={false}
						dragMode="move"
						ref={cropperRef}
					/>
					<div className="mt-4 flex w-32 justify-between">
						<svg
							onClick={handleRotateLeft}
							className="h-8 w-8 cursor-pointer fill-white"
							viewBox="0 0 16 16"
						>
							<path
								fill="currentFill"
								d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"
							/>
						</svg>
						<svg
							onClick={handleRotateRight}
							className="h-8 w-8 cursor-pointer fill-white"
							viewBox="0 0 16 16"
						>
							<path
								fill="currentFill"
								d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"
							/>
						</svg>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="flex w-full items-center justify-end space-x-4">
					<Button variant="outline" status="danger" onClick={onClose}>
						Cancelar
					</Button>
					<Button status="info" onClick={handleCrop}>
						OK
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	)
}
