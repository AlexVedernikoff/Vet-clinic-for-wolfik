/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import { initialValues, validationsSchema } from './Validation';
import { AuthService } from '../../../app/services/AuthService';
import { NewUser } from '../../../types/AuthDTO';

export const SignUp = (): JSX.Element => {
  const onSubmit = (values: NewUser & { agree: boolean }) => {
    if (!values.agree) alert('You have not consented to the processing of personal data');
    else AuthService.createNewUser(values);
  };

  return (
    <div>
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
            <div className={styles.wrapper}>
              <div className={styles.container}>
                <div className={styles.form}>
                  <h2>Create new account</h2>
                  <label>
                    <div className={styles.description}>First name</div>
                    <Field
                      className={errors.firstname && touched.firstname ? styles.invalid : styles.field}
                      type="text"
                      name="firstname"
                      placeholder="First name"
                    />
                    {touched.firstname && errors.firstname && (
                    <p className={styles.validation}>{errors.firstname}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Last name</div>
                    <Field
                      className={errors.lastname && touched.lastname ? styles.invalid : styles.field}
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                    />
                    {touched.lastname && errors.lastname && (
                    <p className={styles.validation}>{errors.lastname}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Email adress</div>
                    <Field
                      className={errors.email && touched.email ? styles.invalid : styles.field}
                      type="email"
                      name="email"
                      placeholder="Email adress"
                    />
                    {touched.email && errors.email && (
                    <p className={styles.validation}>{errors.email}</p>
                    )}
                  </label>
                  <label>
                    <div className={styles.description}>Password</div>
                    <Field
                      className={errors.password && touched.password ? styles.invalid : styles.field}
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
                      className={errors.confirmPassword && touched.confirmPassword ? styles.invalid : styles.field}
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
                    <Field type="checkbox" className={styles.checkbox} name="agree" />
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
                      You have an account?&nbsp;
                      <Link to="/sign-in">Sign In.</Link>
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
