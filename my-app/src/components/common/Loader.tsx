import { useAppSelector } from '../../app/hooks';

import preloader from '../../img/preloader.gif';

export const Loader = () => {
  const { isFetching } = useAppSelector((state) => state.users);

  return <>{isFetching ? <img src={preloader} className="preloader" alt="loading" /> : null}</>;
};
