import * as Yup from 'yup';
import classes from './SignIn.module.scss';

const SignIn = (): JSX.Element => {
  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .min(8, 'Логин должен содержать не менее 8 символов')
      .max(30, 'Логин не должен превышать 30 символов')
      .required('Поле "Логин" обязательно к заполнению'),
  });

  const initVal = {
    login: '',
    password: '',
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h2>Sign In</h2>
      </div>
    </section>
  );
};

export default SignIn;
