import { Status } from 'common'
import { len } from 'common/utils/len'
import { Field, Label, Message, Root } from './Textarea.styles'
import { TextareaProps } from './Textarea.types'

export function Textarea({
	label,
	status = Status.normal,
	name,
	message,
	...props
}: TextareaProps): JSX.Element {
	return (
		<Root>
			{len(label) > 0 && (
				<Label status={status} htmlFor={name}>
					{label}
				</Label>
			)}
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Field {...props} id={name} name={name} status={status} />
			{len(message) > 0 && <Message status={status}>{message}</Message>}
		</Root>
	)
}
