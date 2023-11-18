import './App.css';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikApp } from './FormikApp';
import emailIcon from './email-Icon.png';
import passwordIcon from './lock-Icon.png';
import { PersistFormikValues } from 'formik-persist-values';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .max(25, 'email слишком длинный!')
    .email('неверный email')
    .required('введите email'),
  password: Yup.string()
    .min(3, 'пароль слишком короткий!')
    .max(25, 'пароль слишком длинный!')
    .matches(/^[0-9a-zA-Z_\-/.]+$/, 'недопустимые символы')
    .required('введите пароль'),
});

const App = () => {

  const handleSubmit = (values) => {
    console.log(values.email)
    console.log(values.password)
  }

  return(
    <section className='SignIn'>
      <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
    {
      ( {values, errors, touched, handleChange} ) => (
        <Form action='/form-submitted' method='post' className='Form'>
        <h1>Welcome</h1>
            <FormikApp icon={emailIcon}  error={errors.email} handle={handleChange} values={values.email} touched={touched.email}
              name='email' placeholder={'email'} type="email"
            />
            <FormikApp icon={passwordIcon} error={errors.password} handle={handleChange} values={values.password} touched={touched.password}
              name='password' placeholder={'password'} type="password"
            />
          <button type='submit'>Войти</button>
          <PersistFormikValues name="signup-form" />
        </Form>
      )
    }
      </Formik>
    </section>
  );
}


export default App;
