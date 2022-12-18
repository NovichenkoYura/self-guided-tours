import { ReactComponent as NotChosen } from '../../img/hurt1_notfilled.svg';
import { ReactComponent as Chosen } from '../../img/hurt1_filled.svg';

import { TourInterface } from '../../types';
import { addToBasketThunk, addToWishListThunk } from '../../store/usersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from './Button';

interface TourProps {
  tour: TourInterface;
}

export const Tour: React.FC<TourProps> = ({ tour }) => {
  const dispatch = useAppDispatch();
  const { wishListId, basketId } = useAppSelector((state) => state.users);

  return (
    <li className="tours__item" key={tour.id}>
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
      <div className="tours__btns">
        <Button
          typeOfButton="basket"
          title="Add to"
          callback={() =>
            basketId.includes(tour.id) === false && dispatch(addToBasketThunk(tour.id))
          }
          isSvgIcon={true}
        />
        <Button typeOfButton="basket" title="More..." isSvgIcon={false} />
        <div onClick={() => dispatch(addToWishListThunk(tour.id))}>
          {wishListId.includes(tour.id) ? (
            <Chosen className="tourCard__svgwishlist" width="25" height="25" />
          ) : (
            <NotChosen className="tourCard__svgwishlist" width="25" height="25" />
          )}
        </div>
      </div>
    </li>
  );
};
