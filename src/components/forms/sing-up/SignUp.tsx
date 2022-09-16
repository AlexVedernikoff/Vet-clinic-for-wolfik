/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import ButtonCustom from '../../button/Button';
import styles from './SignUp.module.scss';
import { initialValues, validationsSchema } from './Validation';

interface Values {
  firstname: string;
  lastname: string;
  emailaddress: string;
  password: string;
  confirmpassword: string;
}

export const SignUp = (): JSX.Element => {
  const onSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validationsSchema}
      >
        {({ errors, touched, isValid, handleSubmit, dirty }) => (
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
                      className={styles.field}
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
                      className={styles.field}
                      type="email"
                      name="emailaddress"
                      placeholder="Email adress"
                    />
                    {touched.emailaddress && errors.emailaddress && (
                      <p className={styles.validation}>{errors.emailaddress}</p>
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
                      name="confirmpassword"
                      placeholder="Confirm password"
                    />
                    {touched.confirmpassword && errors.confirmpassword && (
                      <p className={styles.validation}>
                        {errors.confirmpassword}
                      </p>
                    )}
                  </label>

                  <hr />
                  <div className={styles.data}>
                    <input
                      type="checkbox"
                      defaultChecked
                      className={styles.checkbox}
                    />
                    <span className={styles.description}>
                      I agree to the processing of my personal information
                    </span>
                  </div>
                  <div>
                    <ButtonCustom
                      label="Create"
                      style={{ marginTop: '12px', width: '100%' }}
                      type="submit"
                      disabled={!isValid && !dirty}
                    />
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
