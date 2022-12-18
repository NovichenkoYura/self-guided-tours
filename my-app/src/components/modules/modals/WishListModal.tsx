import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ReactComponent as Close } from '../../../img/close-svgrepo-com.svg';
import { ReactComponent as Delete } from '../../../img/delete-svgrepo-com.svg';

import { deleteFromWishListThunk } from '../../../store/usersSlice';

interface WishListProps {
  openWishListCallback: (arg1: boolean) => void;
}

const WishListModal: FC<WishListProps> = ({ openWishListCallback }) => {
  const { wishListId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);

  const toursInWishList = tours.filter((tour) => wishListId.includes(tour.id));

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="popup" onClick={() => openWishListCallback(false)}>
        <ul className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={() => openWishListCallback(false)}>
            <Close width="25" height="25" className="close__svg" />
          </button>
          {toursInWishList.map((tour) => (
            <li className="tours__item" key={tour.id}>
              <button
                className="btnDelete__good"
                onClick={() => dispatch(deleteFromWishListThunk(tour.id))}>
                <Delete width="25" height="25" className="svgDelete__good" />
              </button>
              <div className="wrap">
                <div className="toursItemImage__container">
                  <img src={tour.imgSrc1} className="toursItem__image" alt="Meal" />
                  <img src={tour.imgSrc2} className="toursItem__image" alt="Pig" />
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

export { WishListModal };
