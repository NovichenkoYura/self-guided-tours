import { useAppSelector } from '../../app/hooks';
import { ReactComponent as Basket } from '../../img/shoppingCart.svg';

interface ButtonProps {
  callback?: () => void;
  typeOfButton: 'basket' | 'wishList';
  title: string;
  isSvgIcon: boolean;
}

export const Button: React.FC<ButtonProps> = ({ callback, typeOfButton, title, isSvgIcon }) => {
  const { basketId } = useAppSelector((state) => state.users);

  return (
    // <button onClick={callback} className="cardTours__btn" >

    <button onClick={callback} className="cardTours__btn">
      {title}
      {isSvgIcon && <Basket className="tourCard__svgbasket" width="25" height="25" />}
    </button>
  );
};
