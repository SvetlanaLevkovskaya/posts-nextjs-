'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { customToastError, customToastSuccess } from '@/ui/CustomToast/CustomToast'
import { Button, Input } from '@/ui/index'

import { validationSchema } from '@/utils/validationSchema'

import { login } from '@/stores/userStore'
import { FormData } from '@/types'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async ({ username, password }) => {
    if (username === 'admin' && password === 'admin') {
      login(username, password)
      customToastSuccess(`User ${username} logged in`)
      setTimeout(() => {
        window.location.href = '/'
      }, 1500)
    } else {
      customToastError('Please enter admin/admin')
    }
  }

  return (
    <div className="flex-center-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <Input
            register={register('username', { required: true })}
            placeholder="admin"
            error={errors.username?.message}
            required
            autofocus
          />

          <Input
            register={register('password', { required: true })}
            placeholder="admin"
            type="password"
            error={errors.password?.message}
            required
          />
          <Button color="neon" className="w-full" disabled={isSubmitting}>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
