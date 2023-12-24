import * as yup from 'yup';

const ValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is Required'),
  password: yup
    .string().required('Password is Required'),
})

export default ValidationSchema