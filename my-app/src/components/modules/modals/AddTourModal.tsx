// @ts-nocheck
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../../app/hooks';
import { addToursThunk } from '../../../store/toursSlice';

import { ReactComponent as Close } from '../../../img/close-svgrepo-com.svg';

interface formProps {
  imgSrc1: string;
  imgSrc2: string;
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

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().min(2).max(20).required('Required'),
      description: Yup.string().min(2).max(500).required('Required'),
      country: Yup.string().min(2).max(40).required('Required'),
      duration: Yup.string().min(1).max(4).required('Required'),
      budget: Yup.string().min(1).max(6).required('Required')
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      imgSrc1: '',
      imgSrc2: '',
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
          imgSrc1:
            'https://www.yourlittleblackbook.me/wp-content/uploads/2014/10/IJshotels-FInland-2-700x525.jpg',
          imgSrc2:
            'https://www.visitfinland.com/.imaging/mte/visit-finland-theme/xlUpW/dam/vf/Northern-Lights/Lapland_Best-times-to-see-the-Northern-Lights-and-the-Nightless-Night/Northern-Lights_mirror-aurora_autumn---Markus-Kiili.jpg/jcr:content/Northern%20Lights_mirror%20aurora_autumn%20-%20Markus%20Kiili.jpg',
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
        <ul className="popup-content add__tour" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={() => openAddTourModalCallback(false)}>
            <Close width="25" height="25" className="close__svg" />
          </button>
          <form onSubmit={formik.handleSubmit} className="registrationForm__container add__tour">
            <div className="formik-form ">
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="formik-input add_tour"
                placeholder="Write the title of the tour in several words..."
              />
              <p className="formik-errors-message">{formik.errors.name}</p>

              <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="formik-input add_tour description"
                placeholder="Write the description of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.description}</p>

              <input
                id="country"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="formik-input add_tour"
                placeholder="Coutry of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.country}</p>

              <input
                id="budget"
                name="budget"
                onChange={formik.handleChange}
                value={formik.values.budget}
                className="formik-input add_tour"
                placeholder="Estimated budget per one person..."
              />
              <p className="formik-errors-message">{formik.errors.budget}</p>

              <input
                id="duration"
                name="duration"
                onChange={formik.handleChange}
                value={formik.values.duration}
                className="formik-input add_tour"
                placeholder="Duration of the tour..."
              />
              <p className="formik-errors-message">{formik.errors.duration}</p>

              <button type="submit" className="main__button">
                Add tour
              </button>
            </div>
          </form>
        </ul>
      </div>
    </>
  );
};
