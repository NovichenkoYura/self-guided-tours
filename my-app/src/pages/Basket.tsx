import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useState } from 'react';

const Basket = () => {
  const { basketId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);

  const [activeModal, setActiveModal] = useState(true);

  const toursInBasket = tours.filter((tour) => basketId.includes(tour.id));

  return (
    <>
      <div className={activeModal ? 'modal active' : 'modal'} onClick={() => setActiveModal(false)}>
        <ul
          className={activeModal ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
          {toursInBasket.map((tour) => (
            <li className="tours__item" key={tour.id}>
              <div className="wrap">
                <div className="toursItemImage__container">
                  <img src={tour.imgsourse} className="toursItem__image" alt="Meal" />
                  <img src={tour.imgsourse} className="toursItem__image" alt="Pig" />
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

export { Basket };
