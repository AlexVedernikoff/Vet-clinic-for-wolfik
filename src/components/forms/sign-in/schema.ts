import * as yup from 'yup';

const passwordRules = /[A-z0-9]/;

export const initialValues = { username: '', password: '' };

export const signInSchema = yup.object().shape({
  username: yup
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
      message: 'Password must contain A-Z(a-z)',
    }),
});
