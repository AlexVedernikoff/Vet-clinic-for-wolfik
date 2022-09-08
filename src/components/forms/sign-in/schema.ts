import * as yup from 'yup';

const passwordRules = /^(?=.*\d)[0-9a-zA-Z]{8,}$/;

export const initialValues = { login: '', password: '' };

export const signInSchema = yup.object().shape({
  login: yup
    .string()
    .trim()
    .required('Login is required')
    .min(8, 'Login must have min 8 characters')
    .max(30, 'Login must have max 30 characters'),
  password: yup
    .string()
    .min(6, 'Password must have min 6 characters')
    .max(40, 'Password must have max 40 characters')
    .required('Password is required')
    .matches(passwordRules, {
      message: 'Password must contain A-Z(a-z) and 0-9',
    }),
});
