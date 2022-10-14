//@ts-nocheck
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { addUsersThunk } from '../store/usersSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import preloader from '../img/preloader.gif';

interface formProps {
  token?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  active?: boolean;
  setActive?: boolean;
}

export const Registration: React.FC<formProps> = ({ active, setActive }) => {
  const dispatch = useAppDispatch();
  const token: string = uuidv4();
  const { isFetching } = useAppSelector((state) => state.users);

  const validationSchema = useMemo(() => {
    return Yup.object({
      firstname: Yup.string().min(2).max(100).required('Required'),
      lastname: Yup.string().min(5).max(500).required('Required'),
      email: Yup.string().email().required('Required'),
      password: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      token: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addUsersThunk({
          firstname: values.firstname,
          lastname: values.lastname,
          token: token,
          email: values.email,
          password: values.password
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={active ? 'registrationForm__container modal active' : 'modal'}
      onClick={() => setActive(false)}>
      <div className="formik-form modal__content" onClick={(e) => e.stopPropagation}>
        {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null}
        <input
          id="firstname"
          name="firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          className="formik-input"
          placeholder="Your firstname..."
        />
        <p className="formik-errors-message">{formik.errors.firstname}</p>

        <input
          id="lastname"
          name="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          className="formik-input"
          placeholder="Your lastname..."
        />
        <p className="formik-errors-message">{formik.errors.lastname}</p>

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
