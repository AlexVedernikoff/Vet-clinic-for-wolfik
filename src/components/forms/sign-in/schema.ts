import * as yup from 'yup';

const passwordRules = /[A-z0-9]/;

export const initialValues = { login: '', password: '' };

export const signInSchema = yup.object().shape({
  login: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .min(8, 'Логин должен содержать не менее 8 символов')
    .max(30, 'Логин должен содержать не более 30 символов'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 8 символов')
    .max(40, 'Пароль должен содержать не более 40 символов')
    .required('Обязательное поле')
    .matches(passwordRules, {
      message: 'Пароль должен содержать A-Z(a-z)',
    }),
});
