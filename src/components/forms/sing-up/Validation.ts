import * as yup from 'yup';

export const initialValues = {
  firstname: '',
  lastname: '',
  emailaddress: '',
  password: '',
  confirmpassword: '',
};

export const validationsSchema = yup.object().shape({
  firstname: yup
    .string()
    .trim()
    .min(4, 'Min length First name must be 4 characters')
    .max(20, 'Max length First name must be 20 characters')
    .required('First name is required'),
  lastname: yup
    .string()
    .trim()
    .min(4, 'Min length Last name must be 4 characters')
    .max(30, 'Max length Last name must be 30 characters')
    .required('Last name is required'),
  emailaddress: yup.string().email('Please enter a valid email address')
    .required('Email adress is required'),
  password: yup
    .string()
    .trim()
    .min(6, 'Your password needs to be at least 6 characters')
    .max(40, 'Your password must be less than 40 characters')
    .required('Password is required'),
  confirmpassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
