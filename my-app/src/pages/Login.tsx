import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { addUsersThunk } from '../store/usersSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import preloader from '../img/preloader.gif';

interface formProps {
  email?: string;
  password?: string;
}

export const Login: React.FC<formProps> = () => {
  const dispatch = useAppDispatch();
  const { isFetching } = useAppSelector((state) => state.users);

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
        addUsersThunk({
          email: values.email,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="registrationForm__container">
      <div className="formik-form">
        {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null}

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

        <p className="formik-errors-message">{formik.errors.password}</p>
        <button type="submit" className="main__button">
          Add user
        </button>
      </div>
    </form>
  );
};
