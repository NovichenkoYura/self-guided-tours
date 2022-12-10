// @ts-nocheck
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ReactComponent as FilterArrow } from '../img/arrow-down-sort.svg';
import {
  sortBudgetLowToHigh,
  sortBudgetHighToLow,
  sortDurationLowToHigh,
  sortDurationHighToLow,
  sortTours
} from '../store/toursSlice';

import { FiterItem } from '../components/common/FilterItem';
interface FilterItemProps {
  title: string;
}

const sortItems: { title: string; typeOfSort: string } = [
  { title: 'Budget: Low to High', typeOfSort: 'BLTH' },
  { title: 'Budget: High to Low', typeOfSort: 'BHTL' },
  { title: 'Duration: Low to High', typeOfSort: 'DLTH' },
  { title: 'Duration: High to Low', typeOfSort: 'DHTL' }
];

export const FilterDropDownModuleInTours: React.FC<FilterItemProps> = ({ title }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useAppDispatch();
  const onFilterBudgetLowToHigh = () => dispatch(sortBudgetLowToHigh());
  const onFilterBudgetHighToLow = () => dispatch(sortBudgetHighToLow());
  const onFilterDurationLowToHigh = () => dispatch(sortDurationLowToHigh());
  const onFilterDurationHighToLow = () => dispatch(sortDurationHighToLow());

  return (
    <>
      <div className="dropdown__startWindow__container">
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__startWindow">
          <p className="dropdown__text">Sort by:{title}</p>
          <FilterArrow className="dropdown__startWindow__svg" width="20" height="20" />
        </div>
        {showDropdown && (
          <ul className="dropdownWindowSort__list ">
            {sortItems.map((item) => (
              <FiterItem
                title={item.title}
                callback={() => dispatch(sortTours(item.typeOfSort))}
                key={item.typeOfSort}
              />
            ))}
            {/* <FiterItem title="Budget: Low to High" callback={() => dispatch(sortTours('BLTH'))} />
            <FiterItem title="Budget: High to Low" callback={() => dispatch(sortTours('BHTL'))} />
            <FiterItem title="Duration: Low to High" callback={() => dispatch(sortTours('DLTH'))} />
            <FiterItem title="Duration: High to Low" callback={() => dispatch(sortTours('DHTL'))} /> */}
          </ul>
        )}
      </div>
    </>
  );
};
