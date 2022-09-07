/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

export const SignUp = (): JSX.Element => {
  const validationsSchema = yup.object().shape({
    firstName: yup.string()
      .min(4, 'Min length First name must be 4 characters')
      .max(20, 'Max length First name must be 20 characters')
      .required('First name is required'),
    lastName: yup.string().min(4, 'Min length Last name must be 4 characters')
      .max(30, 'Max length Last name must be 30 characters')
      .required('Last name is required'),
    emailAdress: yup.string().email('Please enter a valid email adress')
      .required('Email adress is required'),
    password: yup.string()
      .min(6, 'Your password needs to be at least 6 characters')
      .max(40, 'Your password must be less than 40 characters')
      .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          emailAdress: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
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
            <div className={styles.wrapper}>
              <div className={styles.container}>
                <div className={styles.form}>
                  <h2>Create new account</h2>
                  <label>
                    <div className={styles.description}>First name</div>
                    <Field
                      className={styles.field}
                      type="text"
                      name="firstName"
                      placeholder="First name"
                    />
                    {touched.firstName && errors.firstName && (
                      <p className={styles.validation}>{errors.firstName}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Last name</div>
                    <Field
                      className={styles.field}
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                    />
                    {touched.lastName && errors.lastName && (
                    <p className={styles.validation}>{errors.lastName}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Email adress</div>
                    <Field
                      className={styles.field}
                      type="email"
                      name="emailAdress"
                      placeholder="Email adress"
                    />
                    {touched.emailAdress && errors.emailAdress && (
                    <p className={styles.validation}>{errors.emailAdress}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Password</div>
                    <Field
                      className={styles.field}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {touched.password && errors.password && (
                    <p className={styles.validation}>{errors.password}</p>
                    )}
                  </label>

                  <label>
                    <div className={styles.description}>Confirm password</div>
                    <Field
                      className={styles.field}
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                    <p className={styles.validation}>{errors.confirmPassword}</p>
                    )}
                  </label>

                  <hr />
                  <div className={styles.data}>
                    <input type="checkbox" defaultChecked className={styles.checkbox} />
                    <span className={styles.description}>I agree to the processing of my personal information</span>
                  </div>
                  <div>
                    <button
                      className={styles.create}
                      type="submit"
                      disabled={!isValid && !dirty}
                    >
                      Create
                    </button>
                    <div className={styles.signin}>
                      Don’t have an account?&nbsp;
                      <Link to="/signIn">Sign In.</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
