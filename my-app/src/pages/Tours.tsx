import hamon_meal from '../img/hamon_meal.jpg';
import hamon_pig from '../img/hamon_pig.jpg';
import atlantic_ocean from '../img/atlantic_ocean.jpg';
import atlantic_castle from '../img/atlantic_castle.jpg';

import { ReactComponent as Chosen } from '../img/hurt.svg';
import { ReactComponent as Basket } from '../img/shoppingCart.svg';

const Tours = () => {
  return (
    <>
      <h1>All tours</h1>
      <ul>
        <li className="tours__item">
          <a href="" className="tours__link">
            <div className="wrap">
              <div className="toursItemImage__container">
                <img src={hamon_meal} className="toursItem__image" alt="Meal" />
                <img src={hamon_pig} className="toursItem__image" alt="Pig" />
              </div>

              <div className="tour__text-part">
                <h2 className="tour__title">Spain: Gastro tour</h2>
                <p className="tour__generaldecsription">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae
                  est quisquam ullam iure commodi iste harum, temporibus reiciendis ipsa sapiente
                  assumenda qui repudiandae deleniti cum nam, perspiciatis aliquam aut. Vero ab
                  similique doloremque repudiandae expedita itaque neque totam provident officiis
                  nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus
                  natus ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur
                  soluta dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid,
                </p>
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
          </a>
        </li>
        <li className="tours__item">
          <a href="" className="tours__link">
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
                  nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus
                  natus ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur
                  soluta dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid,
                </p>
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
          </a>
        </li>
      </ul>
    </>
  );
};

export { Tours };
