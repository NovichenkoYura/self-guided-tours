import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { ReactComponent as Close } from '../../../img/close-svgrepo-com.svg';
import { ReactComponent as Delete } from '../../../img/delete-svgrepo-com.svg';
import { deleteFromBasketThunk } from '../../../store/usersSlice';

interface BasketProps {
  openModalCallback: (arg1: boolean) => void;
}

export const BasketModal: FC<BasketProps> = ({ openModalCallback }) => {
  const dispatch = useAppDispatch();

  const { basketId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);

  const toursInBasket = tours.filter((tour) => basketId.includes(tour.id));

  return (
    <>
      <div className="popup" onClick={() => openModalCallback(false)}>
        <ul className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={() => openModalCallback(false)}>
            <Close width="25" height="25" className="close__svg" />
          </button>

          {toursInBasket.map((tour) => (
            <li className="tours__item" key={tour.id}>
              <button
                className="btnDelete__good"
                onClick={() => dispatch(deleteFromBasketThunk(tour.id))}>
                <Delete width="25" height="25" className="svgDelete__good" />
              </button>
              <div className="wrap">
                <div className="toursItemImage__container">
                  <img src={tour.imgSrc} className="toursItem__image" alt="Meal" />
                  <img src={tour.imgSrc} className="toursItem__image" alt="Pig" />
                </div>

                <div className="tour__text-part">
                  <h2 className="tour__title">{tour.name}</h2>
                  <p className="tour__generaldecsription">{tour.description}</p>
                  <div className="tourData__forFilter">
                    <a className="tourData__forFilter__item">
                      <span>Duration: </span>
                      {tour.duration}
                      <span> days</span>
                    </a>
                    <a className="tourData__forFilter__item">{tour.country}</a>
                    <a className="tourData__forFilter__item">
                      <span>Budget for 1 person: </span>
                      {tour.budget} <span>Euro</span>
                    </a>
                    <a className="tourData__forFilter__item">
                      <span>Cost: </span>
                      {tour.cost}
                      <span>Euro</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
