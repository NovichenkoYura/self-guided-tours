import { useAppSelector } from '../../app/hooks';

import { FilterDropDownModuleInTours } from '../FilterDropDownModuleInTours';
import { Tour } from '../common/Tour';

const ToursModule = () => {
  const { tours } = useAppSelector((state) => state.tours);

  return (
    <>
      <h1>All tours</h1>
      <FilterDropDownModuleInTours />
      <ul>
        {tours.map((tour) => (
          <Tour tour={tour} />
        ))}
      </ul>
    </>
  );
};

export { ToursModule };
