import { Form, Formik, Field } from 'formik';
import { signInSchema, initialValues } from './schema';
import css from '../forms.module.scss';
import { useLoginUserMutation } from '../../../store/auth/auth.api';
import { LoginUser } from '../../../types/AuthDTO';

const SignIn = ():JSX.Element => {
  const [loginUser, { error, data, isLoading, isSuccess, isError }] = useLoginUserMutation();

  const onSubmitForm = (values: LoginUser) => {
    if (!values) {
      console.log('Данные отсутствуют');
    }
    loginUser(values);
  };

  if (isSuccess) {
    console.log('Авторизация выполнена');
    console.log(data);
  }

  if (error) {
    console.log('Что-то пошло не так!');
  }

  return (
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
              <label htmlFor="username">Логин</label>
              <Field
                className={
                        errors.username && touched.username ? css.negative : css.input
                      }
                id="username"
                name="username"
                placeholder="Введите логин"
              />
              {errors.username && touched.username && <p>{errors.username}</p>}
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
};

export default SignIn;
