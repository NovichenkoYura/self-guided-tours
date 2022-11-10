import { useAppDispatch, useAppSelector } from '../app/hooks';

const Basket = () => {
  const { basketId } = useAppSelector((state) => state.users);
  const { tours } = useAppSelector((state) => state.tours);
  console.log('basketId', basketId);
  console.log('tours', tours);

  const toursInBasket = tours.filter((tour) => tour.id === basketId);

  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
};

export { Basket };
