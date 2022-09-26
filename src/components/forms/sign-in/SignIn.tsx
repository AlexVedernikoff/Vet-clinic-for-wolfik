import { Form, Formik, Field } from 'formik';
import { signInSchema, initialValues } from './schema';
import css from '../forms.module.scss';

interface Values {
  login: string;
  password: string;
}

const onSubmitForm = (values: Values): void => console.log(values);

const SignIn = (): JSX.Element => (
  <section className={css.wrapper}>
    <div className={css.container}>
      <h2>Вход</h2>
      <Formik
        onSubmit={onSubmitForm}
        initialValues={initialValues}
        validationSchema={signInSchema}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <label htmlFor="login">Логин</label>
            <Field
              className={
                errors.login && touched.login ? css.negative : css.input
              }
              id="login"
              name="login"
              placeholder="Введите логин"
            />
            {errors.login && touched.login && <p>{errors.login}</p>}
            <label htmlFor="password">Пароль</label>
            <Field
              className={
                errors.password && touched.password ? css.negative : css.input
              }
              id="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
            <button type="submit" className={css.submit}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </section>
);

export default SignIn;
