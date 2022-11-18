import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { addUsersThunk } from '../store/usersSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import preloader from '../img/preloader.gif';

interface formProps {
  token?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const Registration: React.FC<formProps> = () => {
  const dispatch = useAppDispatch();
  const token: string = uuidv4();
  const { isFetching } = useAppSelector((state) => state.users);

  const validationSchema = useMemo(() => {
    return Yup.object({
      firstName: Yup.string().min(2).max(100).required('Required'),
      lastName: Yup.string().min(2).max(500).required('Required'),
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      token: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addUsersThunk({
          firstName: values.firstName,
          lastName: values.lastName,
          token: token,
          email: values.email,
          password: values.password,
          basketId: [],
          wishListId: []
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="registrationForm__container ">
      <div className="formik-form ">
        {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null}
        <input
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="formik-input"
          placeholder="Your firstName..."
        />
        <p className="formik-errors-message">{formik.errors.firstName}</p>

        <input
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="formik-input"
          placeholder="Your lastName..."
        />
        <p className="formik-errors-message">{formik.errors.lastName}</p>

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
