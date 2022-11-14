import { useAppDispatch, useAppSelector } from '../app/hooks';

const Wishlist = () => {
  const { wishListId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);
  // console.log(wishListId);

  const toursInWishList = tours.filter((tour) => wishListId.includes(tour.id));

  return (
    <>
      <ul>
        {toursInWishList.map((tour) => (
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
    </>
  );
};

export { Wishlist };
