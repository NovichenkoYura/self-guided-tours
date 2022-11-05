import { ReactComponent as NotChosen } from '../img/hurt1_notfilled.svg';
import { ReactComponent as Chosen } from '../img/hurt1_filled.svg';

import { ReactComponent as Basket } from '../img/shoppingCart.svg';
import { useAppSelector } from '../app/hooks';
import { useState } from 'react';

const Tours = () => {
  const { tours } = useAppSelector((state) => state.users);
  const [wishItem, setWishItem] = useState(false);

  return (
    <>
      <h1>All tours</h1>
      <ul>
        {tours.map((tour) => (
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
                  <a className="tourData__forFilter__item">Feedback</a>
                </div>
              </div>
            </div>
            <div className="tours__btns">
              <button className="cardTours__btn">
                Add to
                <Basket className="tourCard__svgbasket" width="25" height="25" />
              </button>
              <button className="cardTours__btn">More...</button>
              <div onClick={() => setWishItem(!wishItem)}>
                {wishItem ? (
                  <Chosen className="tourCard__svgwishlist" width="25" height="25" />
                ) : (
                  <NotChosen className="tourCard__svgwishlist" width="25" height="25" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Tours };
