import { useAppDispatch } from '../../app/hooks';
import { addToBasketThunk } from '../../store/usersSlice';

import { ReactComponent as Basket } from '../../img/shoppingCart.svg';

interface ButtonProps {
  callback: () => void;
  typeOfButton: 'basket' | 'wishList';
}

export const Button: React.FC<ButtonProps> = ({ callback, typeOfButton }) => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={callback} className="cardTours__btn">
      Add to
      <Basket className="tourCard__svgbasket" width="25" height="25" />
    </button>
  );
};
