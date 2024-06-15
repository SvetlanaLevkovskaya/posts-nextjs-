'use client'

import { useForm } from 'react-hook-form'
import '../globals.css'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input } from '@/ui/index'
import { login } from '@/stores/userStore'
import { validationSchema } from '@/utils/validationSchema'

import { FormData } from '@/types'


export default function LoginPage() {
	const { register, handleSubmit, formState: { errors, isLoading } } = useForm<FormData>({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = (data: { username: string; password: string }) => {
		const { username, password } = data

		if (username === 'admin' && password === 'admin') {
			login(username, password)
			window.location.href = '/'
		} else {
			alert('Введите admin/admin')
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
				<form onSubmit={ handleSubmit(onSubmit) } className="flex flex-col gap-5">

					<Input
						register={ register('username', { required: true }) }
						placeholder={ 'admin' }
						error={ errors.username?.message }
						required
					/>


					<Input
						register={ register('password', { required: true }) }
						placeholder={ 'admin' }
						error={ errors.password?.message }
						required
					/>
					<Button color="neon" className="w-full" disabled={ isLoading }>Login</Button>
				</form>
			</div>
		</div>
	)
}
