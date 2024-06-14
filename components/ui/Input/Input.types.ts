import { ChangeEventHandler } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputTypeNamespace = 'text' | 'number' | 'password' | 'search' | 'email'

type AutoCompleteType =
	| 'off'
	| 'on'
	| 'name'
	| 'given-name'
	| 'additional-name'
	| 'family-name'
	| 'nickname'
	| 'email'
	| 'username'
	| 'new-password'
	| 'current-password'
	| 'one-time-code'
	| 'tel'

export type InputModeType =
	| 'text'
	| 'search'
	| 'email'
	| 'tel'
	| 'url'
	| 'decimal'
	| 'none'
	| 'numeric'

export interface InputProps {
	// react-hook-form
	register: UseFormRegisterReturn<any>

	label?: string
	placeholder?: string
	type?: InputTypeNamespace
	inputMode?: InputModeType
	big?: boolean
	dark?: boolean
	error?: string | boolean
	onChange?: ChangeEventHandler<HTMLInputElement>
	onClickSearch?: () => void

	required?: boolean
	disabled?: boolean
	className?: string
	autoComplete?: AutoCompleteType
	loading?: boolean
}
