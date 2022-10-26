import hamon_meal from '../img/hamon_meal.jpg';
import hamon_pig from '../img/hamon_pig.jpg';

const Tours = () => {
  return (
    <>
      <h1>All tours</h1>
      <ul>
        <li className="tours__item">
          <a href="" className="tours__link">
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
                nulla! Velit iste dolorum, vel, pariatur nemo quia et quasi eaque voluptatibus natus
                ipsam magnam doloribus eius odit inventore! Magnam delectus aspernatur soluta
                dolorum ut commodi voluptatem nam, rerum aliquam voluptatum aliquid, accusantium sed
                eveniet rem mollitia, provident consectetur? Ducimus quibusdam vero libero!
                Exercitationem ex quod dolor eveniet vero! A aperiam repellendus, pariatur ullam
              </p>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};

export { Tours };
