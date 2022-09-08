import { Form, Formik, Field } from 'formik';
import { signInSchema, initialValues } from './schema';
import css from './SignIn.module.scss';

interface Values {
  login: string;
  password: string;
}

const onSubmitForm = (values: Values): void => console.log(values);

const SignIn = (): JSX.Element => (
  <section className={css.wrapper}>
    <div className={css.container}>
      <h2>Sign In</h2>
      <Formik
        onSubmit={onSubmitForm}
        initialValues={initialValues}
        validationSchema={signInSchema}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <label htmlFor="login">Login</label>
            <Field
              className={
                errors.login && touched.login ? css.negative : css.input
              }
              id="login"
              name="login"
              placeholder="Enter your login"
            />
            {errors.login && touched.login && <p>{errors.login}</p>}
            <label htmlFor="password">Password</label>
            <Field
              className={
                errors.password && touched.password ? css.negative : css.input
              }
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
            <button type="submit" className={css.submit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </section>
);

export default SignIn;
