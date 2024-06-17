import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(5, 'Пароль должен быть не менее 5 символов'),
})
