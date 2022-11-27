// @ts-nocheck
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import preloader from '../../../img/preloader.gif';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addToursThunk } from '../../../store/toursSlice';

import { ReactComponent as Close } from '../../../img/close-svgrepo-com.svg';

interface formProps {
  imgSrc: string;
  description: string;
  duration: number;
  country: string;
  budget: string;
  name: string;
  id: number;
  cost: number;
  openAddTourModalCallback: (arg1: boolean) => void;
}

export const AddTourModal: React.FC<formProps> = ({ openAddTourModalCallback }) => {
  const dispatch = useAppDispatch();
  0;
  const token: string = uuidv4();
  const { isFetching } = useAppSelector((state) => state.users);

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().min(2).max(20).required('Required'),
      description: Yup.string().min(2).max(500).required('Required'),
      country: Yup.string().min(2).max(40).required('Required'),
      duration: Yup.string().min(2).max(4).required('Required'),
      budget: Yup.string().min(2).max(6).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      imgSrc: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/1f/a0/c3.jpg',
      description: '',
      duration: '',
      country: '',
      budget: '',
      name: '',
      id: '',
      cost: 5
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addToursThunk({
          imgSrc: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/1f/a0/c3.jpg',
          description: values.description,
          duration: values.duration,
          country: values.country,
          budget: values.budget,
          name: values.name,
          id: token,
          cost: 5
        })
      );
      resetForm();
    },
    validationSchema
  });
  return (
    <>
      <div className="popup" onClick={() => openAddTourModalCallback(false)}>
        <ul className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={() => openAddTourModalCallback(false)}>
            <Close width="25" height="25" className="close__svg" />
          </button>
          <form onSubmit={formik.handleSubmit} className="registrationForm__container ">
            <div className="formik-form ">
              {isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null}
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="formik-input"
                placeholder="The title of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.name}</p>

              <input
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="formik-input"
                placeholder="Description of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.description}</p>

              <input
                id="country"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="formik-input"
                placeholder="Coutry of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.country}</p>

              <input
                id="budget"
                name="budget"
                onChange={formik.handleChange}
                value={formik.values.budget}
                className="formik-input"
                placeholder="Estimated budget per one person..."
              />
              <p className="formik-errors-message">{formik.errors.budget}</p>

              <input
                id="duration"
                name="duration"
                onChange={formik.handleChange}
                value={formik.values.duration}
                className="formik-input"
                placeholder="Duration of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.duration}</p>

              <button type="submit" className="main__button">
                Add user
              </button>
            </div>
          </form>
        </ul>
      </div>
    </>
  );
};
