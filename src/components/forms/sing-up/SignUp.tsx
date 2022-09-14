/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import css from '../sign-in/SignIn.module.scss';
import { initialValues, validationsSchema } from './Validation';

interface Values {
  firstname: string
  lastname: string
  emailaddress: string
  password: string
  confirmpassword: string
}

export const SignUp = (): JSX.Element => {
  const onSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <h2>Create new account</h2>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={validationsSchema}
        >
          {({
            errors,
            touched,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="firstname">First name</label>
              <Field
                className={errors.firstname && touched.firstname ? css.negative : css.input}
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
              />
              {touched.firstname && errors.firstname && (
                <p className={styles.validation}>{errors.firstname}</p>
              )}
              <label htmlFor="lastname">Last name</label>
              <Field
                className={errors.lastname && touched.lastname ? css.negative : css.input}
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Last name"
              />
              {touched.lastname && errors.lastname && (
                <p className={styles.validation}>{errors.lastname}</p>
              )}
              <label htmlFor="emailaddress">Email adress</label>
              <Field
                className={errors.emailaddress && touched.emailaddress ? css.negative : css.input}
                type="email"
                id="emailaddress"
                name="emailaddress"
                placeholder="Email adress"
              />
              {touched.emailaddress && errors.emailaddress && (
                <p className={styles.validation}>{errors.emailaddress}</p>
              )}
              <label htmlFor="password">Password</label>
              <Field
                className={errors.password && touched.password ? css.negative : css.input}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <p className={styles.validation}>{errors.password}</p>
              )}
              <label htmlFor="confirmpassword">Confirm password</label>
              <Field
                className={errors.confirmpassword && touched.confirmpassword ? css.negative : css.input}
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm password"
              />
              {touched.confirmpassword && errors.confirmpassword && (
                <p className={styles.validation}>{errors.confirmpassword}</p>
              )}
              <hr />
              <div className={styles.data}>
                <input type="checkbox" defaultChecked className={styles.checkbox} />
                <span className={styles.description}>I agree to the processing of my personal information</span>
              </div>
              <button
                className={css.submit}
                type="submit"
                disabled={!isValid && !dirty}
              >
                Create
              </button>
              <div className={styles.signin}>
                Don’t have an account?&nbsp;
                <Link to="/signIn">Sign In.</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
