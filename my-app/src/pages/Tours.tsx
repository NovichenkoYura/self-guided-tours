import hamon_meal from '../img/hamon_meal.jpg';
import hamon_pig from '../img/hamon_pig.jpg';
import atlantic_ocean from '../img/atlantic_ocean.jpg';
import atlantic_castle from '../img/atlantic_castle.jpg';
import germany_alps from '../img/germany_alps.jpg';
import germany_town from '../img/germany_town.jpg';

import { ReactComponent as Chosen } from '../img/hurt.svg';
import { ReactComponent as Basket } from '../img/shoppingCart.svg';
import { useAppSelector } from '../app/hooks';

const Tours = () => {
  const { tours } = useAppSelector((state) => state.users);

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
              <Chosen className="tourCard__svgwishlist" width="25" height="25" />
            </div>
          </li>
        ))}
      </ul>
      {/* <h1>All tours</h1>
      <ul>
        <li className="tours__item">
          <div className="wrap">
            <div className="toursItemImage__container">
              <img src={hamon_meal} className="toursItem__image" alt="Meal" />
              <img src={hamon_pig} className="toursItem__image" alt="Pig" />
              <img src={hamon_meal} className="toursItem__image" alt="Meal" />
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/1f/a0/c3.jpg"
                className="toursItem__image"
                alt="Pig"
              />
            </div>

            <div className="tour__text-part">
              <h2 className="tour__title">Spain: Gastro tour</h2>
              <p className="tour__generaldecsription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae
                est quisquam ullam iure commodi iste harum, temporibus reiciendis ipsa sapiente
                assumenda qui repudiandae deleniti cum nam, perspiciatis aliquam aut. Vero ab
                similique doloremque repudiandae expedita itaque neque totam provident officiis
                nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus natus
                ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur soluta
                dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid,
              </p>
              <div className="tourData__forFilter">
                <a className="tourData__forFilter__item">Duration: 5 days</a>
                <a className="tourData__forFilter__item">Spain</a>
                <a className="tourData__forFilter__item">Budget for 1 person: 350 Euro</a>
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
            <Chosen className="tourCard__svgwishlist" width="25" height="25" />
          </div>
        </li>
        <li className="tours__item">
          <div className="wrap">
            <div className="toursItemImage__container">
              <img src={atlantic_ocean} className="toursItem__image" alt="atlantic_ocean" />
              <img src={atlantic_castle} className="toursItem__image" alt="castle" />
            </div>

            <div className="tour__text-part">
              <h2 className="tour__title">Spain - Portugal: Atlantic coast</h2>
              <p className="tour__generaldecsription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae
                est quisquam ullam iure commodi iste harum, temporibus reiciendis ipsa sapiente
                assumenda qui repudiandae deleniti cum nam, perspiciatis aliquam aut. Vero ab
                similique doloremque repudiandae expedita itaque neque totam provident officiis
                nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus natus
                ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur soluta
                dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid,
              </p>
              <div className="tourData__forFilter">
                <a className="tourData__forFilter__item">Duration: 6 days</a>
                <a className="tourData__forFilter__item">Spain, Portugal</a>
                <a className="tourData__forFilter__item">Budget for 1 person: 450 Euro</a>
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
            <Chosen className="tourCard__svgwishlist" width="25" height="25" />
          </div>
        </li>
        <li className="tours__item">
          <div className="wrap">
            <div className="toursItemImage__container">
              <img src={germany_alps} className="toursItem__image" alt="alps" />
              <img src={germany_town} className="toursItem__image" alt="town" />
            </div>

            <div className="tour__text-part">
              <h2 className="tour__title">Germany: Alps and cities</h2>
              <p className="tour__generaldecsription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae
                est quisquam ullam iure commodi iste harum, temporibus reiciendis ipsa sapiente
                assumenda qui repudiandae deleniti cum nam, perspiciatis aliquam aut. Vero ab
                similique doloremque repudiandae expedita itaque neque totam provident officiis
                nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus natus
                ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur soluta
                dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid,
              </p>
              <div className="tourData__forFilter">
                <a className="tourData__forFilter__item">Duration: 4 days</a>
                <a className="tourData__forFilter__item">Germany</a>
                <a className="tourData__forFilter__item">Budget for 1 person: 380 Euro</a>
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
            <Chosen className="tourCard__svgwishlist" width="25" height="25" />
          </div>
        </li>
      </ul> */}
    </>
  );
};

export { Tours };
