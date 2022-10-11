import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

// import { addCommentsThunk } from './store/commentSlice';
// import { useAppDispatch, useAppSelector } from './app/hooks';
import preloader from './img/preloader.gif';

interface formProps {
  id?: string;
  name?: string;
  text?: string;
  email?: string;
  password?: string;
}

export const Registration: React.FC<formProps> = () => {
  //   const dispatch = useAppDispatch();
  //   const projectId: string = uuidv4();
  //   const { isFetching } = useAppSelector((state) => state.comments);

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().min(2).max(100).required('Required'),
      text: Yup.string().min(5).max(500).required('Required'),
      email: Yup.string().email()
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      id: ''
    },
    onSubmit: (values, { resetForm }) => {
      //   dispatch(addCommentsThunk({ name: values.name, text: values.text, id: projectId }));
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="registrationForm__container">
      <div className="formik-form">
        {/* {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null} */}
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
          Add comment
        </button>
      </div>
    </form>
  );
};
