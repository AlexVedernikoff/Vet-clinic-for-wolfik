import { Form, Formik, Field } from 'formik';
import { signInSchema, initialValues } from './schema';
import { LoginUser } from '../../../types/AuthDTO';
import { loginUser } from '../../../app/services/AuthService';
import css from './SignIn.module.scss';

const SignIn = (): JSX.Element => (
  <section className={css.wrapper}>
    <div className={css.container}>
      <h2>Sign In</h2>
      <Formik
        onSubmit={(values: LoginUser) => loginUser(values)}
        initialValues={initialValues}
        validationSchema={signInSchema}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <label htmlFor="login">Login</label>
            <Field
              className={
                errors.username && touched.username ? css.negative : css.input
              }
              id="username"
              name="username"
              placeholder="Enter your login"
            />
            {errors.username && touched.username && <p>{errors.username}</p>}
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
