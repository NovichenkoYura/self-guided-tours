import { useAppDispatch, useAppSelector } from '../app/hooks';

const Basket = () => {
  const { basketId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);
  console.log('basketId', basketId);
  console.log('tours', tours);

  const toursInBasket = tours.filter((tour) => basketId.includes(tour.id));

  return (
    <>
      <ul>
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
                  <a className="tourData__forFilter__item">Feedback</a>
                </div>
              </div>
            </div>
            <div className="tours__btns">
              {/* <button
                onClick={() => dispatch(addtoBasketThunk(tour.id))}
                className="cardTours__btn">
                Add to
                <Basket className="tourCard__svgbasket" width="25" height="25" />
              </button> */}
              {/* <button className="cardTours__btn">More...</button>
              <div onClick={() => setWishItem(!wishItem)}>
                {wishItem ? (
                  <Chosen className="tourCard__svgwishlist" width="25" height="25" />
                ) : (
                  <NotChosen className="tourCard__svgwishlist" width="25" height="25" />
                )}
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Basket };
