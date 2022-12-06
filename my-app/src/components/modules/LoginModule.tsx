import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo } from 'react';

import { loginThunk } from '../../store/usersSlice';
import { useAppDispatch } from '../../app/hooks';

interface formProps {
  email?: string;
  password?: string;
}

export const LoginModule: React.FC<formProps> = () => {
  const dispatch = useAppDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        loginThunk({
          email: values.email,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="registrationForm__container logIn">
      <div className="formik-form">
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="formik-input"
          placeholder="Your email..."
        />
        <p className="formik-errors-message">{formik.errors.email}</p>

        <input
          id="name"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="formik-input"
          placeholder="Your password..."
        />
        <p className="formik-errors-message">{formik.errors.password}</p>

        <button type="submit" className="main__button">
          Log in
        </button>
      </div>
    </form>
  );
};
