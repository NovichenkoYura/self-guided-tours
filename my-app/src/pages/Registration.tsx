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
}

export const Registration: React.FC<formProps> = () => {
//   const dispatch = useAppDispatch();
//   const projectId: string = uuidv4();
//   const { isFetching } = useAppSelector((state) => state.comments);

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().min(2).max(100).required('Required'),
      text: Yup.string().min(5).max(500).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      text: '',
      id: ''
    },
    onSubmit: (values, { resetForm }) => {
    //   dispatch(addCommentsThunk({ name: values.name, text: values.text, id: projectId }));
      resetForm();
    },
    validationSchema
  });
  return (
    <form onSubmit={formik.handleSubmit} className="commentsForm__container">
      <div className="formik-form">
        {/* {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null} */}
        <input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="formik-input"
          placeholder="Your name..."
        />
        <p className="formik-errors-message">{formik.errors.name}</p>

        <textarea
          id="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text}
          placeholder="Your comment..."
        />
        <p className="formik-errors-message">{formik.errors.text}</p>
        <button type="submit" className="main__button">
          Add comment
        </button>
      </div>
    </form>
  );
};
